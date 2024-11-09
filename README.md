# AndrezDevInc Website

This is a responsive, professional landing page for **AndrezDevInc**, built with React and deployed on GitHub Pages. The site is designed to showcase services, portfolio projects, and provide an easy way for clients to contact us.

## 📋 Table of Contents

- About the Project
- Features
- Technologies Used
- Getting Started
- Deployment
- Custom Domain Setup
- Troubleshooting
- Contributing
- License

---

## 🌟 About the Project

This project was developed as a modern, clean, and responsive landing page for **AndrezDevInc**. It includes various sections like services, portfolio, and a contact form, styled with a sleek design to create a user-friendly experience.

### Key Objectives

- To showcase portfolio projects and services provided.
- To offer an intuitive way for clients to reach out.
- To ensure a responsive design across all devices.

---

## ✨ Features

- **Responsive Design**: Adapts smoothly to desktop, tablet, and mobile screens.
- **Portfolio Section**: Displays past projects with clickable images linking to additional details.
- **Contact Form**: Uses EmailJS integration to enable direct communication from the website.
- **Dark Mode Toggle**: Allows users to switch between light and dark themes.

---

## 🛠️ Technologies Used

- **React**: JavaScript library for building the user interface.
- **CSS Modules**: Component-specific styling to keep code organized.
- **EmailJS**: Service for handling contact form submissions.
- **GitHub Pages**: For easy, free deployment of the website.

---

## 🚀 Getting Started

To set up and run this project locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** installed on your system. Download from Node.js at https://nodejs.org/.

### Installation

1. Clone the repository:
   `git clone https://github.com/your-username/your-repo-name.git`

2. Navigate into the project directory:
   `cd your-repo-name`

3. Install dependencies:
   `npm install`

4. Run the project locally:
   `npm start`

   This should open the app at http://localhost:3000 in your browser.

---

## 🚢 Deployment

This project is deployed using GitHub Pages. To deploy any updates, follow these steps:

1. Build the app:
   `npm run build`

2. Deploy to GitHub Pages:
   `npm run deploy`

3. Visit your live site:
   `https://your-username.github.io/your-repo-name`

If you are using a custom domain, visit https://yourdomain.com instead.

---

## 🌐 Custom Domain Setup

1. Set the `homepage` field in `package.json` to your custom domain:
   `"homepage": "https://www.yourdomain.com"`

2. Create a `CNAME` file in the `public` folder with your custom domain:
   `yourdomain.com`

3. Update DNS Settings:
   - Add A records pointing `yourdomain.com` to these IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Add a CNAME record for `www.yourdomain.com` pointing to `your-username.github.io`.

---

## 🔧 Troubleshooting

If your site shows a blank page after deployment, check these common issues:

1. **Homepage Field**: Ensure `homepage` in `package.json` points to your custom domain.
2. **Console Errors**: Open Developer Tools in your browser and check for any errors in the Console.
3. **DNS Propagation**: DNS changes can take up to 24 hours. Try clearing your browser cache or using incognito mode if updates are not appearing.
4. **GitHub Pages Settings**: Verify that the source for GitHub Pages is set to the `gh-pages` branch under **Settings > Pages**.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Thanks to [React](https://reactjs.org/) for making front-end development accessible.
- Special thanks to [EmailJS](https://www.emailjs.com/) for simplifying contact form integration.
- Kudos to [GitHub Pages](https://pages.github.com/) for offering easy hosting for static sites.

