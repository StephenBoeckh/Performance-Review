'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('fundlists', [
        {
        name: 'US Companies Class',
        company: "Invesco",
        category: "US Equity",
        risk: "Medium",
        yeara: -0.57,
        yearb: 21.75,
        yearc: -2.01,
        yeard: 15.41,
        yeare: 25.64,
      },
      {
        name: 'Global Growth Class',
        company: "Invesco",
        category: "Global Equity",
        risk: "Medium",
        yeara: -7.87,
        yearb: 9.1,
        yearc: -1.08,
        yeard: 14.02,
        yeare: 13.36 
      },
      {
        name: 'Canadian Opportunity Class',
        company: "Invesco",
        category: "Canadian Equity",
        risk: "Medium",
        yeara: -18.59,
        yearb: 3.31,
        yearc: 18.22,
        yeard: -9.09,
        yeare: 6.46
      },
      {
        name: 'American Equity Fund',
        company: "CI Investments",
        category: "US Equity",
        risk: "Medium",
        yeara: -3.54,
        yearb: 2.97,
        yearc: 10.94,
        yeard: 7.87,
        yeare: 16.28
      },
      {
        name: 'Signature Global Equity Fund',
        company: "CI Investments",
        category: "Global Equity",
        risk: "Medium",
        yeara: -7.4,
        yearb: 15.01,
        yearc: 2.89,
        yeard: 11.26,
        yeare: 12.61
      },
      {
        name: 'Cambridge Pure Canadian Equity Fund',
        company: "CI Investments",
        category: "Canadian Equity",
        risk: "Medium",
        yeara: -12.92,
        yearb: -0.4,
        yearc: 21.94,
        yeard: -5.76,
        yeare: 14.65
      },
      {
        name: 'MFS US Equity Fund',
        company: "Sun Life Global Investments",
        category: "US Equity",
        risk: "Medium",
        yeara: 1.22,
        yearb: 13.24,
        yearc: 3.04,
        yeard: 18.02,
        yeare: 18.6
      },
      {
        name: 'MFS Global Growth Fund',
        company: "Sun Life Global Investments",
        category: "Global Equity",
        risk: "Medium",
        yeara: 2.22,
        yearb: 21.13,
        yearc: -0.2,
        yeard: 15.7,
        yeare: 11.57
      },
      {
        name: 'MFS Canadian Equity Growth Fund',
        company: "Sun Life Global Investments",
        category: "Canadian Equity",
        risk: "Medium",
        yeara: -8.4,
        yearb: 6.1,
        yearc: 13.17,
        yeard: -6.18,
        yeare: 11.57
      },
      {
        name: 'US Equity Fund',
        company: "BMO",
        category: "US Equity",
        risk: "Medium",
        yeara: -3.31,
        yearb: 14.28,
        yearc: 4.85,
        yeard: 15.92,
        yeare: 24.03
      },
      {
        name: 'Global Equity Class',
        company: "BMO",
        category: "Global Equity",
        risk: "Medium",
        yeara: -4.43,
        yearb: 16.69,
        yearc: -3.29,
        yeard: 20.83,
        yeare: 11.46
      },
      {
        name: 'Canadian Equity Class',
        company: "BMO",
        category: "Canadian Equity",
        risk: "Medium",
        yeara: -11.85,
        yearb: 8.22,
        yearc: 13.49,
        yeard: -2.54,
        yeare: 8.22
      },
      {
        name: 'American Equity Fund',
        company: "Fidelity",
        category: "US Equity",
        risk: "Medium",
        yeara: 5.23,
        yearb: 5.96,
        yearc: -5.04,
        yeard: 25.45,
        yeare: 28.49
      },
      {
        name: 'Global Fund',
        company: "Fidelity",
        category: "Global Equity",
        risk: "Medium",
        yeara: -5.34,
        yearb: 18.07,
        yearc: 1.77,
        yeard: 22.33,
        yeare: 10.4
      },
      {
        name: 'Canadian Growth Fund',
        company: "Fidelity",
        category: "Canadian",
        risk: "Medium",
        yeara: -9.24,
        yearb: 15.38,
        yearc: 13.6,
        yeard: 10.8,
        yeare: 15.06
      },
      {
        name: 'US Equity Fund',
        company: "CIBC",
        category: "US Equity",
        risk: "Medium",
        yeara: 4.2,
        yearb: 15.8,
        yearc: -0.9,
        yeard: 25.67,
        yeare: 19.15
      },
      {
        name: 'Global Equity Fund',
        company: "CIBC",
        category: "Global Equity",
        risk: "Medium",
        yeara: -4.71,
        yearb: 12.97,
        yearc: -0.95,
        yeard: 13.97,
        yeare: 10.04
      },
      {
        name: 'Canadian Equity Fund',
        company: "CIBC",
        category: "Canadian Equity",
        risk: "Medium",
        yeara: -10.65,
        yearb: 8.94,
        yearc: 16.02,
        yeard: -7.78,
        yeare: 7.31
      },
      {
        name: 'US Growth Class',
        company: "Mackenzie",
        category: "US Equity",
        risk: "Medium",
        yeara: 4.48,
        yearb: 13.26,
        yearc: -4.17,
        yeard: 13.62,
        yeare: 18.88
      },
      {
        name: 'Global Equity Class',
        company: "Mackenzie",
        category: "Global Equity",
        risk: "Medium",
        yeara: -13.69,
        yearb: 21.0,
        yearc: -1.84,
        yeard: 8.52,
        yeare: 4.42
      },
      {
        name: 'Canadian Growth Class',
        company: "Mackenzie",
        category: "Canadian Equity",
        risk: "Medium",
        yeara: -2.6,
        yearb: 14.2,
        yearc: 9.15,
        yeard: 13.78,
        yeare: 22.43
      },
      {
        name: 'US Equity',
        company: "Category Average",
        category: "US Equity",
        risk: "Medium",
        yeara: -0.44,
        yearb: 13.27,
        yearc: 5.85,
        yeard: 13.6,
        yeare: 18.27
      },
      {
        name: 'Global Equity',
        company: "Category Average",
        category: "Global Equity",
        risk: "Medium",
        yeara: -4.46,
        yearb: 13.58,
        yearc: 3.32,
        yeard: 11.85,
        yeare: 9.94
      },
      {
        name: 'Canadian Equity',
        company: "Category Average",
        category: "Canadian Equity",
        risk: "Medium",
        yeara: -9.41,
        yearb: 8.11,
        yearc: 17.39,
        yeard: -6.06,
        yeare: 9.4
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('fundlists', null, {});
  }
};
