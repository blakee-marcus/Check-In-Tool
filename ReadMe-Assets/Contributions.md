# Contributing to Tesla Check-In-Tool 🚗

Thank you for considering contributing to the Tesla Check-In-Tool! Your contributions are greatly appreciated, and they help ensure the growth and longevity of the tool. Here's how you can contribute.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Pull Requests](#pull-requests)
4. [Bug Reports](#bug-reports)
5. [Feature Requests](#feature-requests)
6. [Questions & Discussions](#questions-&-discussions)

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](./Contribution-Code-of-Conduct.md). By participating in this project, you agree to abide by its terms.

## Getting Started

1. Fork the repository on GitHub.
2. Clone your forked repository to your machine:

```bash
git clone git@github.com:blakee-marcus/Check-In-Tool.git
```

3. Navigate to your local repo:

```bash
cd Check-In-Tool
```

4. Create a new branch for your work:

```bash
git checkout -b my-feature-branch
```

5. Make your changes or additions.
6. Push your work back up to your fork:

```bash
git push origin my-feature-branch
```

7. Submit a Pull Request to the `Check-In-Tool` repository for review.

## Pull Request

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the `README.md` if any changes invalidate its current content.
3. Provide detailed descriptions in PRs, mentioning the changes and their purposes.
4. Please link any relevant issues in your PRs.
5. PRs should be made to the `main` branch, unless you're working on a specific feature branch that has been previously discussed.
6. Ensure your changes don't break any existing functionality, especially if there are tests in place.

## Code Style and Linting

The project uses ESLint with the Airbnb configuration to maintain code quality and consistency. Before submitting a pull request, please ensure your code adheres to this style by running:

```bash
Copy code
npx eslint --fix ./
```

This will automatically fix any linting errors in your code, and alert you to any that it can't fix automatically. Please address these manually.

If you're unfamiliar with the Airbnb style guide, you can read more about it [here.](https://github.com/airbnb/javascript)

## Bug Reports

When filing an issue, make sure to answer these five questions:

1. What version of Node and other relevant tools are you using?
2. What did you do?
3. What did you expect to see?
4. What did you see instead?
5. What's the potential fix? (optional)

## Feature Requests

Feature requests are welcome! Please provide as much detail as possible about the feature, its use case, and any potential challenges.
