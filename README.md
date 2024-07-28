# Checkers Game

This is a simple checkers game built with Vue.js and Tauri.

## Prerequisites

Before you start, make sure you have the following installed:

1. **Node.js**: You can download it from [Node.js official website](https://nodejs.org/).
2. **Rust**: Follow the instructions on [Rust's official website](https://www.rust-lang.org/tools/install) to install Rust.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/bradyrenting/checkers-app.git
   cd checkers-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up Tauri**:
   Tauri is used for building the desktop application. Ensure you have Tauri CLI installed:
   ```bash
   cargo install tauri-cli
   ```

## Running the Development Server

1. **Run the development server**:
   This will start the Vue.js development server.

   ```bash
   npm run dev
   ```

2. **Run the Tauri development environment**:
   In another terminal, run:
   ```bash
   npm run tauri dev
   ```

## Building the Application

To build the application for production, run:

```bash
npm run tauri build
```

## Project Structure

- `src/`: Contains the Vue.js application code.
- `src-tauri/`: Contains the Tauri configuration and Rust code.
- `public/`: Contains public assets and the main HTML file.
- `package.json`: Node.js project configuration.
- `package-lock.json`: NPM dependency lock file.
