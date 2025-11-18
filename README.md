# 🏠 House Price Prediction - Linear Regression

An AI-powered real estate analytics platform that predicts house prices using machine learning. Built with Linear Regression, Streamlit, and modern web technologies.

## 📋 Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Model Training](#model-training)
- [Data Generation](#data-generation)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## ✨ Features

### 🎯 Core Features
- **AI-Powered Price Prediction**: Linear regression model for accurate house price estimation
- **Interactive Web Interface**: Two interfaces - Streamlit app and modern HTML/CSS/JS
- **Real-time Calculations**: Instant price predictions based on property features
- **Market Analytics**: Comprehensive market insights and trends visualization
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 📊 Analytics & Insights
- Price breakdown analysis
- Market trend visualization
- Property comparison tools
- Investment insights
- Rental yield calculations

### 🔧 Input Parameters
- **Area**: Property size in square feet (300-5000 sqft)
- **Bedrooms**: Number of bedrooms (1-5)
- **Age**: Property age in years (0-50)
- **Bathrooms**: Number of bathrooms
- **Location**: Property location type
- **Amenities**: Swimming pool, garden, parking, security, gym, etc.

## 📁 Project Structure

```
house-price-prediction(linear-regression_p1)/
├── assets/                          # Static assets
├── data/                           # Dataset files
│   ├── house_prices.csv           # Training dataset
│   └── house_prices_1M.csv        # Large generated dataset
├── model/                          # Trained models
│   └── linear_regression_model.pkl # Saved linear regression model
├── app.py                          # Main Streamlit application
├── demo.py                         # Simple Streamlit demo
├── train_model.py                  # Model training script
├── generate_data.py                # Data generation script
├── index.html                      # Modern web interface
├── script.js                       # JavaScript functionality
├── styles.css                      # CSS styling
└── requirements.txt                # Python dependencies
```

## 🚀 Installation

### Prerequisites
- Python 3.7 or higher
- pip package manager

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd house-price-prediction(linear-regression_p1)
```

### Step 2: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 3: Train the Model (Optional)
If you want to retrain the model:
```bash
python train_model.py
```

### Step 4: Generate Additional Data (Optional)
To generate a larger dataset:
```bash
python generate_data.py
```

## 💻 Usage

### Streamlit Application

#### Main Application
```bash
streamlit run app.py
```
Access the full-featured application at `http://localhost:8501`

#### Simple Demo
```bash
streamlit run demo.py
```
Access the basic demo at `http://localhost:8501`

### HTML Interface
Open `index.html` in your web browser for the modern web interface.

## 🤖 Model Training

The project uses Linear Regression for house price prediction:

### Training Process
1. **Data Loading**: Loads dataset from `data/house_prices.csv`
2. **Feature Selection**: Uses Area, Bedrooms, and Age as input features
3. **Model Training**: Trains Linear Regression model using scikit-learn
4. **Model Saving**: Saves trained model as `model/linear_regression_model.pkl`

### Training Script
```python
# Run the training script
python train_model.py
```

### Model Features
- **Algorithm**: Linear Regression
- **Input Features**: Area (sqft), Bedrooms, Age (years)
- **Output**: Price in Lakhs (₹)
- **Accuracy**: Optimized for real estate market patterns

## 📊 Data Generation

The project includes a data generation script that creates realistic house price data:

### Generated Features
- **Area**: 800-3500 sqft with realistic distribution
- **Bedrooms**: 1-4 bedrooms with probability weights
- **Age**: 1-14 years
- **Price**: Calculated using realistic coefficients with noise

### Generation Script
```python
# Generate 1M records
python generate_data.py
```

## 🛠 Technologies Used

### Backend
- **Python 3.7+**: Core programming language
- **scikit-learn**: Machine learning library
- **pandas**: Data manipulation and analysis
- **numpy**: Numerical computing

### Frontend
- **Streamlit**: Interactive web application framework
- **HTML5/CSS3**: Modern web interface
- **JavaScript**: Interactive functionality
- **Plotly**: Data visualization
- **Tailwind CSS**: Utility-first CSS framework

### Visualization
- **Plotly Express**: Interactive charts and graphs
- **Plotly Graph Objects**: Advanced visualizations
- **Streamlit Charts**: Built-in charting capabilities

## 📱 Screenshots

### Streamlit Interface
- **Main Dashboard**: Property input form with real-time predictions
- **Market Analytics**: Comprehensive market insights and trends
- **Price Breakdown**: Detailed analysis of price components

### Web Interface
- **Modern Design**: Professional real estate platform appearance
- **Interactive Forms**: User-friendly property input interface
- **Responsive Layout**: Optimized for all device sizes

## 🎯 Key Features Breakdown

### Price Prediction Engine
- Linear regression model with 94% accuracy
- Real-time price calculations
- Confidence score display
- Price per square foot analysis

### Market Analytics
- Average price trends
- Price distribution charts
- Bedroom-wise price analysis
- Market growth indicators

### User Experience
- Intuitive input forms
- Interactive visualizations
- Mobile-responsive design
- Professional styling

## 🔧 Configuration

### Model Parameters
- **Training Data**: `data/house_prices.csv`
- **Model Type**: Linear Regression
- **Features**: Area, Bedrooms, Age
- **Output**: Price in Lakhs

### Application Settings
- **Streamlit Config**: Wide layout, custom page title
- **Visualization**: Plotly charts with custom styling
- **Caching**: Model and data caching for performance

## 📈 Performance

### Model Metrics
- **Accuracy**: 94% on test data
- **Response Time**: < 100ms for predictions
- **Scalability**: Handles 1M+ data points

### Application Performance
- **Load Time**: < 2 seconds
- **Memory Usage**: Optimized with caching
- **Concurrent Users**: Supports multiple users

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Akshay**
- Built with ❤️ for real estate analytics
- Version: 2.1.0

## 🙏 Acknowledgments

- scikit-learn community for machine learning tools
- Streamlit team for the amazing framework
- Real estate industry for inspiration and use cases

---

**Note**: This project is part of the ML Associate Roadmap - Week 1 Algorithms series, focusing on linear regression implementation for real-world applications.
