import streamlit as st
import pandas as pd
import pickle

# -----------------------------
# Page Config
# -----------------------------
st.set_page_config(
    page_title="House Price Predictor",
    page_icon="🏠",
    layout="centered",
)

# -----------------------------
# Load Model
# -----------------------------
with open("model/linear_regression_model.pkl", "rb") as file:
    model = pickle.load(file)

# -----------------------------
# Custom CSS Styling
# -----------------------------
st.markdown("""
    <style>
        .main-title {
            text-align: center;
            font-size: 42px;
            font-weight: 800;
            color: #2c3e50;
            margin-top: -20px;
        }
        .sub-text {
            text-align: center;
            font-size: 18px;
            color: #555;
            margin-bottom: 30px;
        }
        .prediction-box {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            margin-top: 20px;
            border: 2px solid #90caf9;
        }
        .prediction-text {
            font-size: 28px;
            font-weight: 700;
            color: #0d47a1;
        }
    </style>
""", unsafe_allow_html=True)

# -----------------------------
# Title Section
# -----------------------------
st.markdown("<h1 class='main-title'>🏠 House Price Prediction</h1>", unsafe_allow_html=True)
st.markdown("<p class='sub-text'>Enter the house details below to get an estimated market price (in Lakhs)</p>", unsafe_allow_html=True)

# -----------------------------
# Sidebar
# -----------------------------
st.sidebar.header("ℹ️ About This App")
st.sidebar.write("This is a machine learning-powered house price prediction tool built using:")
st.sidebar.write("✔ Linear Regression")
st.sidebar.write("✔ Streamlit")
st.sidebar.write("✔ Python")

st.sidebar.write("Created by **Akshay** 💻")

# -----------------------------
# Input Section
# -----------------------------
st.subheader("📋 Enter House Details")

col1, col2 = st.columns(2)

with col1:
    area = st.number_input("📐 Area (sqft)", min_value=300, max_value=5000, value=1200)

with col2:
    bedrooms = st.selectbox("🛏 Bedrooms", [1, 2, 3, 4, 5])

age = st.slider("🏚 House Age (years)", 0, 50, 5)

# -----------------------------
# Predict Button
# -----------------------------
if st.button("🔮 Predict House Price", use_container_width=True):
    input_data = [[area, bedrooms, age]]
    prediction = model.predict(input_data)[0]

    st.markdown(
        f"""
        <div class='prediction-box'>
            <p class='prediction-text'>Estimated Price:<br> ₹ {prediction:.2f} Lakhs</p>
        </div>
        """,
        unsafe_allow_html=True
    )
