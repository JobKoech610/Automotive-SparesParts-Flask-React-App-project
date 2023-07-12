
from random import randint 
from random import choice as rc
import random
from faker import Faker
from app import app




from models import db, Showroom, Customer, Showroom_customer
# db.init_app(app)
fake = Faker()

with app.app_context():

        Showroom.query.delete()
        Customer.query.delete()
        Showroom_customer.query.delete()

        
        
            # locations = ["Nakuru","Nairobi","Mombasa"]
            # accessories = ["tyre","rims","dashboard","engine","gearbox","windscreen","wiper","side_mirrors","engine_mount","air_filter","brakepads","headlights","plugs","shock","bearing","spring","cv_joint","gearbox_mounting","stearing_rack","push","crank_shaft"]
        tyre = Showroom(
            # name = "mascardi", 
            location = "Nairobi",
            description = "Positive - Stable handling and short braking in the dry, low noise, good comfort.",
            accessories= "tyre",
            image = "https://www.tyrereviews.com/public/tyres/BFGoodrich-Advantage.png",
            price = 5000

        ) 

        
        # db.session.add_all(tyre)

        rims = Showroom(
            # name = "kairo", 
            location = "Nairobi",
            description = "Manufactured in Germany; x-ray inspected to ensure quality,One Piece Counter Pressure Cast Wheel with Flow-formed rim, Weight optimized by FEM analysis",
            accessories= "rims",
            image = "https://cdn.bbs.com/63/assets/images/products/CH-R-v2/wheel_shadow1.jpg",
            price = 5000

        )
        # db.session.add_all(rims)

        engine = Showroom(
            # name = "kairo", 
            location = "Nairobi",
            description = "Petrol 3.0 L N52/N55 I6 4.4 L N63/S63 V8 4.8 L N62 V8 Diesel: 3.0 L M57/N57 I6",
            accessories= "engine",
            image = "https://commons.wikimedia.org/wiki/File:BMW_V8_engine_X5.jpg",
            price = 5000

        )
        # db.session.add_all(engine)

        gearbox = Showroom(
            # name = "tristar", 
            location = "Nakuru",
            description = "Rigorously formulated and tested by Bosch's engineers, the Organic friction material in the QuietCast line is meticulously engineered to achieve superior performance, exceptional stopping power, and quiet operation with low dust",
            accessories= "brake_pads",
            image = "https://m.media-amazon.com/images/I/71Y7mvBGRBL._AC_SX450_.jpg",
            price = 5000

        )
        # db.session.add_all(gearbox)

        air_filter= Showroom(
            # name = "kenjap", 
            location = "Mombasa",
            description = "TRAPS DIRT AND FILTH: Various damaging particles and dust can collect over your engine, however, with FRAM car air filter, Extra Guard entraps these particles for a safer, cleaner, and quality engine performance.",
            accessories= "air_filter",
            image = "https://m.media-amazon.com/images/I/71MGyemZ-jL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
            price = 5000

        )
        # db.session.add_all(air_filter)
        db.session.add_all([air_filter,gearbox,engine,rims,tyre])
    

        customer=[]
        for i in range(5):
            c = Customer(
                name = fake.name(), 
                email = fake.email()

            ) 

            customer.append(c)
        db.session.add_all(customer)
       


        showroom_customer = []
        for i in range(5):
            room =Showroom_customer(
                customer_id = random.randint(1,5),
                showroom_id = random.randint(1,5)

            ) 

            showroom_customer.append(room)
        db.session.add_all(showroom_customer)
        db.session.commit()


