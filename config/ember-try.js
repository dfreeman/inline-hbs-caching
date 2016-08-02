/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    },
    {
      name: 'ember-alpha',
      bower: {
        dependencies: {
          'ember': 'components/ember#alpha'
        },
        resolutions: {
          'ember': 'alpha'
        }
      }
    }
  ]
};
