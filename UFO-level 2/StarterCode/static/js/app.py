from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_mars

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app.config = ["MONGO_URL"]= "mongodb://localhost:27017/mars_app")
mongo= PyMongo(app)
# Route that will trigger the scrape function
@app.route("/")
def index():

    # Run the scrape function
    mars= mongo.db.mars.find_one()
    return render_template("index.html", mars=mars)

  @app.route("/scrape")
  def scrape():
      mars = mongo.db.mars
      mars_data= scrape_mars.scrape_all()
      mars.update({}, mars_data, upsert = True)
      return redirect ('/', code = 302)

if __name__ == "__main__":
    app.run()