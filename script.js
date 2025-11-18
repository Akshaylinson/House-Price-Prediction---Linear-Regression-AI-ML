// Sample data generation
function generateSampleData() {
    const areas = Array.from({length: 100}, () => Math.floor(Math.random() * 2500) + 500);
    const bedrooms = Array.from({length: 100}, () => Math.floor(Math.random() * 4) + 1);
    const ages = Array.from({length: 100}, () => Math.floor(Math.random() * 30));
    const prices = areas.map((area, i) => area * 0.05 + bedrooms[i] * 20 + (Math.random() * 20 - 10));
    const locations = ['Downtown', 'Suburb', 'Riverside', 'Hillside'];
    
    return {
        areas, bedrooms, ages, prices,
        locations: Array.from({length: 100}, () => locations[Math.floor(Math.random() * locations.length)]),
        dates: Array.from({length: 100}, (_, i) => new Date(2020, 0, i + 1))
    };
}

// Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show target page
            pages.forEach(page => page.classList.add('hidden'));
            document.getElementById(`${targetPage}-page`).classList.remove('hidden');
        });
    });

    // Age slider display
    const ageSlider = document.getElementById('age');
    const ageDisplay = document.getElementById('age-display');
    
    ageSlider.addEventListener('input', function() {
        ageDisplay.textContent = `${this.value} years`;
    });

    // Prediction functionality
    const predictBtn = document.getElementById('predict-btn');
    const predictionResult = document.getElementById('prediction-result');
    
    predictBtn.addEventListener('click', function() {
        // Simulate prediction calculation
        const area = parseFloat(document.getElementById('area').value);
        const bedrooms = parseInt(document.getElementById('bedrooms').value);
        const age = parseInt(document.getElementById('age').value);
        const bathrooms = parseInt(document.getElementById('bathrooms').value);
        const location = document.getElementById('location').value;
        const amenities = document.querySelectorAll('.amenity-checkbox:checked').length;
        
        // Base prediction model (simplified)
        let basePrice = area * 0.04 + bedrooms * 25 - age * 0.8;
        
        // Adjustments
        let adjustment = bathrooms * 3 + amenities * 2;
        if (location === 'downtown') adjustment += 20;
        else if (location === 'hillside') adjustment += 15;
        else if (location === 'riverside') adjustment += 10;
        
        const finalPrice = basePrice + adjustment;
        
        // Display result
        document.getElementById('prediction-value').textContent = `₹ ${finalPrice.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})} L`;
        
        // Show breakdown chart
        updateBreakdownChart(basePrice, bedrooms, location, amenities);
        
        // Show result
        predictionResult.classList.remove('hidden');
    });

    // Initialize charts
    initializeCharts();
});

function updateBreakdownChart(basePrice, bedrooms, location, amenities) {
    const locationValue = location === 'downtown' ? 20 : location === 'hillside' ? 15 : location === 'riverside' ? 10 : 5;
    const amenitiesValue = amenities * 2;
    const bedroomsValue = bedrooms * 5;
    
    const data = [{
        x: ['Base Price', 'Bedrooms', 'Location', 'Amenities'],
        y: [basePrice, bedroomsValue, locationValue, amenitiesValue],
        type: 'bar',
        marker: {
            color: ['#667eea', '#764ba2', '#4fd1c7', '#f6ad55']
        }
    }];
    
    const layout = {
        showlegend: false,
        margin: { t: 0, r: 0, l: 40, b: 30 }
    };
    
    Plotly.newPlot('breakdown-chart', data, layout, {displayModeBar: false});
}

function initializeCharts() {
    const sampleData = generateSampleData();
    
    // Price Distribution Chart
    const priceDistData = [{
        x: sampleData.prices,
        type: 'histogram',
        marker: {
            color: '#667eea'
        }
    }];
    
    const priceDistLayout = {
        title: '',
        xaxis: { title: 'Price (Lakhs)' },
        yaxis: { title: 'Frequency' }
    };
    
    Plotly.newPlot('price-distribution-chart', priceDistData, priceDistLayout, {displayModeBar: false});
    
    // Bedroom Price Chart
    const bedroomStats = {};
    sampleData.bedrooms.forEach((bedroom, i) => {
        if (!bedroomStats[bedroom]) bedroomStats[bedroom] = [];
        bedroomStats[bedroom].push(sampleData.prices[i]);
    });
    
    const avgPrices = Object.keys(bedroomStats).map(bedroom => 
        bedroomStats[bedroom].reduce((a, b) => a + b, 0) / bedroomStats[bedroom].length
    );
    
    const bedroomData = [{
        x: Object.keys(bedroomStats),
        y: avgPrices,
        type: 'bar',
        marker: {
            color: '#764ba2'
        }
    }];
    
    const bedroomLayout = {
        title: '',
        xaxis: { title: 'Number of Bedrooms' },
        yaxis: { title: 'Average Price (Lakhs)' }
    };
    
    Plotly.newPlot('bedroom-price-chart', bedroomData, bedroomLayout, {displayModeBar: false});
    
    // Price Trend Chart
    const monthlyData = {};
    sampleData.dates.forEach((date, i) => {
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
        if (!monthlyData[monthKey]) monthlyData[monthKey] = [];
        monthlyData[monthKey].push(sampleData.prices[i]);
    });
    
    const monthlyAvg = Object.values(monthlyData).map(prices => 
        prices.reduce((a, b) => a + b, 0) / prices.length
    );
    
    const trendData = [{
        x: Object.keys(monthlyData),
        y: monthlyAvg,
        type: 'scatter',
        mode: 'lines+markers',
        line: { color: '#667eea' }
    }];
    
    const trendLayout = {
        title: '',
        xaxis: { title: 'Month' },
        yaxis: { title: 'Average Price (Lakhs)' }
    };
    
    Plotly.newPlot('price-trend-chart', trendData, trendLayout, {displayModeBar: false});
    
    // Area vs Price Chart
    const scatterData = [{
        x: sampleData.areas,
        y: sampleData.prices,
        mode: 'markers',
        type: 'scatter',
        marker: {
            color: sampleData.bedrooms,
            colorscale: 'Viridis',
            showscale: true
        }
    }];
    
    const scatterLayout = {
        title: '',
        xaxis: { title: 'Area (sqft)' },
        yaxis: { title: 'Price (Lakhs)' }
    };
    
    Plotly.newPlot('area-price-chart', scatterData, scatterLayout, {displayModeBar: false});
    
    // Location Table
    const locationStats = {};
    sampleData.locations.forEach((location, i) => {
        if (!locationStats[location]) locationStats[location] = { prices: [], areas: [] };
        locationStats[location].prices.push(sampleData.prices[i]);
        locationStats[location].areas.push(sampleData.areas[i]);
    });
    
    let tableHTML = `
        <table class="min-w-full">
            <thead>
                <tr class="bg-gray-100">
                    <th class="px-4 py-2 text-left">Location</th>
                    <th class="px-4 py-2 text-right">Avg Price (L)</th>
                    <th class="px-4 py-2 text-right">Properties</th>
                    <th class="px-4 py-2 text-right">Avg Area (sqft)</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    Object.keys(locationStats).forEach(location => {
        const avgPrice = locationStats[location].prices.reduce((a, b) => a + b, 0) / locationStats[location].prices.length;
        const avgArea = locationStats[location].areas.reduce((a, b) => a + b, 0) / locationStats[location].areas.length;
        const count = locationStats[location].prices.length;
        
        tableHTML += `
            <tr class="border-t">
                <td class="px-4 py-2">${location}</td>
                <td class="px-4 py-2 text-right">${avgPrice.toFixed(2)}</td>
                <td class="px-4 py-2 text-right">${count}</td>
                <td class="px-4 py-2 text-right">${avgArea.toFixed(0)}</td>
            </tr>
        `;
    });
    
    tableHTML += '</tbody></table>';
    document.getElementById('location-table').innerHTML = tableHTML;
}
