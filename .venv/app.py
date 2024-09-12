from flask import Flask, render_template, request, redirect, flash, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import login_user, login_required, logout_user, LoginManager, UserMixin

app = Flask(__name__)
app.secret_key = 'sdgdwffewofeiuwoehufiowfhue'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)
manager = LoginManager(app)


class Users(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(16), nullable=False)
    password = db.Column(db.String, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Users %r>' % self.id


@manager.user_loader
def load_user(user_id):
    return Users.query.get(user_id)


@app.route("/", methods=['GET'])
def index():
    return render_template('home.html', title="Главная страница")


@app.route('/cabinet', methods=['GET'])
@login_required
def main():
    return render_template('cabinet.html')


@app.route("/register")
def register():
    return render_template('register.html', title="Регистрация")


@app.route('/register_handler', methods=['POST', 'GET'])
def register_handler():
    username = request.form.get('username')
    phone = request.form.get('phone')
    password = request.form.get('password')
    repeat_password = request.form.get('repeat_password')

    if request.method == 'POST':
        if not (username or phone or password or repeat_password):
            flash('Заполните все поля!')
        elif password != repeat_password:
            flash('Пароли не совпадают!')
        else:
            try:
                if phone == Users.query.filter_by(phone=phone).first().phone:
                    flash('Номер уже зарегестрирован')
                return render_template('register.html')
            except:
                hash_pwd = generate_password_hash(password)
                new_user = Users(username=username, phone=phone, password=hash_pwd)
                if password == repeat_password:
                    try:
                        db.session.add(new_user)
                        db.session.commit()
                        return redirect('/register_complete')
                    except:
                        return "При регистрации произошла ошибка"

    return render_template('register.html', title="Регистрация")


@app.route('/register_complete', methods=['GET'])
def register_complete():
    return render_template('register_complete.html', title="Успешная регистрация")


@app.route('/login', methods=['GET', 'POST'])
def login():
    phone = request.form.get('phone')
    password = request.form.get('password')

    if phone and password:
        user = Users.query.filter_by(phone=phone).first()
        id = user.id
        URL = "/cabinet/" + str(id)

        if user and check_password_hash(user.password, password):
            login_user(user)

            return redirect(URL)
        else:
            flash('Неправильный логин или пароль')
    else:
        flash('Пожалуйста заполните все поля')

    return render_template('login.html', title="Авторизация")


@app.route('/cabinet/<id>', methods=['POST', 'GET'])
@login_required
def user(id):
    user = Users.query.filter_by(id=id).first_or_404()
    if request.method == "POST":
        user.username = request.form['username']

        try:
            db.session.commit()
            return render_template('cabinet.html', user=user)
        except:
            return "Ошибка редактирования"
    return render_template('cabinet.html', user=user)


@app.route('/cabinet/<id>/password_change', methods=['POST', 'GET'])
@login_required
def change(id):
    old_password = request.form.get('old_password')
    new_password = request.form.get('new_password')
    repeat_new_password = request.form.get('repeat_new_password')
    user = Users.query.filter_by(id=id).first_or_404()
    id = user.id
    URL = "/cabinet/" + str(id)
    if request.method == "POST" or request.method == "GET":
        if not (old_password or new_password or repeat_new_password):
            flash("Заполните все поля!")
        elif new_password != repeat_new_password:
            flash("Пароли не совпадают!")
        elif check_password_hash(user.password, old_password):
            hash_pwd = generate_password_hash(new_password)
            if new_password == repeat_new_password:
                try:
                    user.password = hash_pwd
                    db.session.commit()
                    return redirect(URL)
                except:
                    return "При смене пароля произошла ошибка"
        else:
            flash("Неправильный пароль")

    return render_template('password_change.html', user=user)


if __name__ == "__main__":
    app.run(debug=True)
