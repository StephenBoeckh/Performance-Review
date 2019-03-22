'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('fundlists', [
        {
        name: 'US Companies Class',
        company: "Invesco",
        category: "US Equity",
        risk: "Medium",
        2018: -0.57,
        2017: 21.75,
        2016: -2.01,
        2015: 15.41,
        2014: 25.64,
      },
      {
        name: 'Global Growth Class',
        company: "Invesco",
        category: "Global Equity",
        risk: "Medium",
        2018: -7.87,
        2017: 9.1,
        2016: -1.08,
        2015: 14.02,
        2014: 13.36 
      },
      {
        name: 'Canadian Opportunity Class',
        company: "Invesco",
        category: "Canadian Equity",
        risk: "Medium",
        2018: -18.59,
        2017: 3.31,
        2016: 18.22,
        2015: -9.09,
        2014: 6.46
      },
      {
        name: 'American Equity Fund',
        company: "CI Investments",
        category: "US Equity",
        risk: "Medium",
        2018: -3.54,
        2017: 2.97,
        2016: 10.94,
        2015: 7.87,
        2014: 16.28
      },
      {
        name: 'Signature Global Equity Fund',
        company: "CI Investments",
        category: "Global Equity",
        risk: "Medium",
        2018: -7.4,
        2017: 15.01,
        2016: 2.89,
        2015: 11.26,
        2014: 12.61
      },
      {
        name: 'Cambridge Pure Canadian Equity Fund',
        company: "CI Investments",
        category: "Canadian Equity",
        risk: "Medium",
        2018: -12.92,
        2017: -0.4,
        2016: 21.94,
        2015: -5.76,
        2014: 14.65
      },
      {
        name: 'MFS US Equity Fund',
        company: "Sun Life Global Investments",
        category: "US Equity",
        risk: "Medium",
        2018: 1.22,
        2017: 13.24,
        2016: 3.04,
        2015: 18.02,
        2014: 18.6
      },
      {
        name: 'MFS Global Growth Fund',
        company: "Sun Life Global Investments",
        category: "Global Equity",
        risk: "Medium",
        2018: 2.22,
        2017: 21.13,
        2016: -0.2,
        2015: 15.7,
        2014: 11.57
      },
      {
        name: 'MFS Canadian Equity Growth Fund',
        company: "Sun Life Global Investments",
        category: "Canadian Equity",
        risk: "Medium",
        2018: -8.4,
        2017: 6.1,
        2016: 13.17,
        2015: -6.18,
        2014: 11.57
      },
      {
        name: 'US Equity Fund',
        company: "BMO",
        category: "US Equity",
        risk: "Medium",
        2018: -3.31,
        2017: 14.28,
        2016: 4.85,
        2015: 15.92,
        2014: 24.03
      },
      {
        name: 'Global Equity Class',
        company: "BMO",
        category: "Global Equity",
        risk: "Medium",
        2018: -4.43,
        2017: 16.69,
        2016: -3.29,
        2015: 20.83,
        2014: 11.46
      },
      {
        name: 'Canadian Equity Class',
        company: "BMO",
        category: "Canadian Equity",
        risk: "Medium",
        2018: -11.85,
        2017: 8.22,
        2016: 13.49,
        2015: -2.54,
        2014: 8.22
      },
      {
        name: 'American Equity Fund',
        company: "Fidelity",
        category: "US Equity",
        risk: "Medium",
        2018: 5.23,
        2017: 5.96,
        2016: -5.04,
        2015: 25.45,
        2014: 28.49
      },
      {
        name: 'Global Fund',
        company: "Fidelity",
        category: "Global Equity",
        risk: "Medium",
        2018: -5.34,
        2017: 18.07,
        2016: 1.77,
        2015: 22.33,
        2014: 10.4
      },
      {
        name: 'Canadian Growth Fund',
        company: "Fidelity",
        category: "Canadian",
        risk: "Medium",
        2018: -9.24,
        2017: 15.38,
        2016: 13.6,
        2015: 10.8,
        2014: 15.06
      },
      {
        name: 'US Equity Fund',
        company: "CIBC",
        category: "US Equity",
        risk: "Medium",
        2018: 4.2,
        2017: 15.8,
        2016: -0.9,
        2015: 25.67,
        2014: 19.15
      },
      {
        name: 'Global Equity Fund',
        company: "CIBC",
        category: "Global Equity",
        risk: "Medium",
        2018: -4.71,
        2017: 12.97,
        2016: -0.95,
        2015: 13.97,
        2014: 10.04
      },
      {
        name: 'Canadian Equity Fund',
        company: "CIBC",
        category: "Canadian Equity",
        risk: "Medium",
        2018: -10.65,
        2017: 8.94,
        2016: 16.02,
        2015: -7.78,
        2014: 7.31
      },
      {
        name: 'US Growth Class',
        company: "Mackenzie",
        category: "US Equity",
        risk: "Medium",
        2018: 4.48,
        2017: 13.26,
        2016: -4.17,
        2015: 13.62,
        2014: 18.88
      },
      {
        name: 'Global Equity Class',
        company: "Mackenzie",
        category: "Global Equity",
        risk: "Medium",
        2018: -13.69,
        2017: 21.0,
        2016: -1.84,
        2015: 8.52,
        2014: 4.42
      },
      {
        name: 'Canadian Growth Class',
        company: "Mackenzie",
        category: "Canadian Equity",
        risk: "Medium",
        2018: -2.6,
        2017: 14.2,
        2016: 9.15,
        2015: 13.78,
        2014: 22.43
      },
      {
        name: 'US Equity',
        company: "Category Average",
        category: "US Equity",
        risk: "Medium",
        2018: -0.44,
        2017: 13.27,
        2016: 5.85,
        2015: 13.6,
        2014: 18.27
      },
      {
        name: 'Global Equity',
        company: "Category Average",
        category: "Global Equity",
        risk: "Medium",
        2018: -4.46,
        2017: 13.58,
        2016: 3.32,
        2015: 11.85,
        2014: 9.94
      },
      {
        name: 'Canadian Equity',
        company: "Category Average",
        category: "Canadian Equity",
        risk: "Medium",
        2018: -9.41,
        2017: 8.11,
        2016: 17.39,
        2015: -6.06,
        2014: 9.4
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('fundlists', null, {});
  }
};
