import pandas as pd
import numpy as np
import random

# Set random seed for reproducibility
np.random.seed(42)
random.seed(42)

# Analyze existing data patterns
# Area: 800-3500 sqft (approximately)
# Bedrooms: 1-4
# Age: 1-14 years
# Price: roughly correlated with area, inversely with age

def generate_house_data(num_records=1000000):
    data = []
    
    for i in range(num_records):
        # Generate area (800-3500 sqft)
        area = np.random.randint(800, 3501)
        
        # Generate bedrooms (1-4, with probability distribution)
        bedrooms = np.random.choice([1, 2, 3, 4], p=[0.1, 0.3, 0.4, 0.2])
        
        # Generate age (1-14 years)
        age = np.random.randint(1, 15)
        
        # Generate price based on area, bedrooms, and age with some noise
        # Base price calculation with realistic coefficients
        base_price = (area * 0.04) + (bedrooms * 8) - (age * 2) + np.random.normal(0, 10)
        
        # Ensure price is positive and within reasonable range
        price = max(20, min(200, round(base_price)))
        
        data.append([area, bedrooms, age, price])
        
        # Print progress every 100,000 records
        if (i + 1) % 100000 == 0:
            print(f"Generated {i + 1:,} records...")
    
    return data

print("Starting data generation...")
print("This will generate 1,000,000 records of house price data...")

# Generate the data
house_data = generate_house_data(1000000)

# Create DataFrame
df = pd.DataFrame(house_data, columns=['Area (sqft)', 'Bedrooms', 'Age (years)', 'Price (Lakhs)'])

# Save to CSV
output_file = r"e:\AL_ML_ASSOCIATE_ROADMAP\week1- algorthms\house-price-prediction(linear-regression_p1)\data\house_prices_1M.csv"
df.to_csv(output_file, index=False)

print(f"\nData generation complete!")
print(f"Generated {len(df):,} records")
print(f"File saved as: {output_file}")

# Display basic statistics
print("\nData Statistics:")
print(df.describe())

# Display first few rows
print("\nFirst 10 rows:")
print(df.head(10))

# Display last few rows
print("\nLast 10 rows:")
print(df.tail(10))
