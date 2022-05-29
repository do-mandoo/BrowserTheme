const fs = require('fs');
const YAML = require('js-yaml');

try {
  // load the YAML
  const raw = fs.readFileSync('yaml_test.yaml');
  const data = YAML.load(raw);
  // show the YAML
  console.log(data, 'show data');

  // // Modify the YAML
  data.customer.first_name = 'Bob'; // Dorothy
  console.log(data, 'modify data');
  // Save the YAML
  const yaml = YAML.dump(data);
  fs.writeFileSync('yaml_test.yaml', yaml, (err, data) => {
    console.log('hi');
    if (err) throw err;
    console.log(data, 'save data');
  });
  console.log(data, 'final data');
} catch (error) {
  console.log(error);
}
