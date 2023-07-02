# Contribution Guide

Thank you for considering contributing to our project! Here's a brief guide to help you get started:

1. **Implement New Tests**:
   - Feel free to add new tests for supported platforms like Chrome, iOS app, and iOS Safari.
   - Ensure that your tests are well-structured and cover relevant functionality and scenarios.

2. **Modify/Create Configuration Files**:
   - Update or create `wdio.*.conf.ts` files for specific platforms or devices.
   - Include the necessary settings and capabilities in the configuration files.

3. **Update Package.json**:
   - Add descriptive run scripts in the `package.json` file for easy test execution.
   - Ensure the scripts are clear and follow a consistent naming convention.
4. **Selector Syntax**:

    When selecting elements with IDs, be aware of the syntax differences based on the platform:
    - For iOS, use the accessibility ID locator strategy. You can use the accessibility identifier provided by Apple here. Example: `const elem = await $('~my_accessibility_identifier')`

     Refer to the [documentation] (https://webdriver.io/docs/selectors/) for more details.

Guidelines:
- Maintain high code quality by following coding style and guidelines.
- Thoroughly test your changes before submitting a pull request.
- Provide clear and concise commit messages.
- Include a detailed description when submitting a pull request.
- Collaborate and be open to feedback from other contributors.

Thank you for your contribution! If you have any questions, feel free to reach out. 
Happy coding!