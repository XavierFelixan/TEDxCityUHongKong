from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:xaviervortex@localhost/postgres'
db = SQLAlchemy(app)
CORS(app)

class Registrant(db.Model):
    __tablename__ = "registrant"
    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, nullable=False)
    phone = db.Column(db.String, nullable=False)
    affiliation = db.Column(db.String, nullable=False)
    radio = db.Column(db.String, nullable=False)

with app.app_context():
    db.create_all()

@app.route("/registration", methods=['POST'], strict_slashes=False)
def reg():
    # Open the tracker file to keep track of number of regisrants that have existed in the database to ease primary key assignment
    with open("./TEDxCityU/tedx-cityu/flask-server/tracker.txt", mode="r") as file:
        num = int(file.readline()) + 1
    with open("./TEDxCityU/tedx-cityu/flask-server/tracker.txt", mode="w") as file:
        file.write(str(num))
    print(request.json)
    name = request.json['reg_name']
    email = request.json['email']
    phone = request.json['phone']
    aff = request.json['aff']
    radio = request.json['choice']
    other = request.json['other']
    if radio == 'Others':
        radio = other
    new_registrant = Registrant(id=f"T{num}", name=name, email=email, phone=phone, affiliation=aff, radio=radio)

    db.session.add(new_registrant)
    db.session.commit()
    return request, 200

if __name__ == "__main__":
    app.run(debug=True)