let fs;
let csv;

// Check if running in Node.js environment
if (typeof window === 'undefined') {
   // fs = require('fs');
    csv = require('csv-parser');
} else {
    // If running in browser environment, import csv-parser using dynamic import
    // Note: Dynamic imports are asynchronous
    import('csv-parser').then(module => {
        csv = module.default;
    });
}

function createData(csvFilePath, targetCategory) {
  const dictionary = {};

  // Read the CSV file
  if (fs) {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        // Extracting data from CSV row
        const {
          Name,
          Tagline,
          Description,
          Category,
          'Youtube link': YoutubeLink,
          'Founded in': FoundedIn,
          'Name of the Founders': Founders,
          'Special Features': SpecialFeatures,
          'Pricing Plans': PricingPlans,
          'Website Link': WebsiteLink,
          Logo
        } = row;

        // Only process rows with the target category
        if (Category === targetCategory) {
          // Creating dictionary entry
          dictionary[Name] = {
            name: Name,
            tagline: Tagline,
            description: Description,
            category: Category,
            youtube_link: YoutubeLink,
            founded: FoundedIn,
            founders: Founders,
            special_features: SpecialFeatures,
            pricing_plans: PricingPlans,
            website: WebsiteLink,
            logo: Logo
          };
        }
      })
      .on('end', () => {
        console.log('Dictionary created:', dictionary);
      });
  } else {
    console.error('fs module not available. Cannot read CSV file.');
  }

  return dictionary;
}

export default createData;
