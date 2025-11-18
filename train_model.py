import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle

# Load dataset
df = pd.read_csv("data/house_prices.csv")

X = df[["Area (sqft)", "Bedrooms", "Age (years)"]]
y = df["Price (Lakhs)"]

# Train model
model = LinearRegression()
model.fit(X, y)

# Save model as .pkl
with open("model/linear_regression_model.pkl", "wb") as file:
    pickle.dump(model, file)

print("Model saved successfully -> model/linear_regression_model.pkl")
