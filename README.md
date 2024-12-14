<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">REDLOCK-K8S-LABORATORY</h1></p>
<p align="center">
	<em>Orchestrating distributed locks, reliably and efficiently.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/diekotto/redlock-k8s-laboratory?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/diekotto/redlock-k8s-laboratory?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/diekotto/redlock-k8s-laboratory?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/diekotto/redlock-k8s-laboratory?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">Built with the tools and technologies:</p>
<p align="center">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/Redis-DC382D.svg?style=flat&logo=Redis&logoColor=white" alt="Redis">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/GNU%20Bash-4EAA25.svg?style=flat&logo=GNU-Bash&logoColor=white" alt="GNU%20Bash">
	<img src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=Yarn&logoColor=white" alt="Yarn">
	<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=flat&logo=Docker&logoColor=white" alt="Docker">
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

redlock-k8s-laboratory showcases a scalable microservices architecture using Kubernetes, Redis, and Node.js. It demonstrates distributed locking and task scheduling, enabling efficient processing of concurrent jobs. The project provides a foundation for building robust, fault-tolerant systems that can handle high-volume workloads. Ideal for developers and DevOps professionals seeking best practices for containerized application design.

---

## 👾 Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Microservices architecture with `web-server`, `cron-service`, and `Redis` components</li><li>Containerization using `Docker` for consistent runtime environments</li><li>Orchestration and deployment using `Kubernetes` for scalability and reliability</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Modular and organized codebase structure</li><li>Use of popular and well-maintained libraries and frameworks (`Express`, `ioredis`, `cron`)</li><li>Consistent coding style and naming conventions</li></ul> |
| 📄 | **Documentation** | <ul><li>Comprehensive `README.md` file providing project overview and setup instructions</li><li>Well-commented code explaining key functionalities and logic</li><li>Clear and concise `Dockerfile` and `package.json` files for each component</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integration with `Redis` for distributed locking and data persistence</li><li>Communication between `web-server` and `cron-service` components</li><li>Seamless local development and testing using `Minikube`'s Docker daemon</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Separation of concerns between `web-server`, `cron-service`, and `Redis` components</li><li>Reusable and maintainable code modules (`main.js`, `Dockerfile`, `package.json`)</li><li>Loose coupling between components through well-defined interfaces and communication channels</li></ul> |
| 🧪 | **Testing**       | <ul><li>Automated build and deployment processes using `Docker Compose` and `Kubernetes`</li><li>Real-time monitoring and logging of `web-server` and `Redis` components</li><li>Streamlined development workflow with `Minikube` integration for local testing</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Efficient handling of HTTP requests and message processing in the `web-server`</li><li>Optimized task execution and retry logic in the `cron-service`</li><li>Utilization of `Redis` for fast in-memory data storage and retrieval</li></ul> |
| 🛡️ | **Security**      | <ul><li>Containerization provides isolation and security between components</li><li>Secure communication between components using environment variables for configuration</li><li>Potential for implementing authentication and authorization mechanisms</li></ul> |

---

## 📁 Project Structure

```sh
└── redlock-k8s-laboratory/
    ├── LICENSE
    ├── README.md
    ├── commands
    │   ├── build-into-registry.sh
    │   ├── log-redis.sh
    │   └── log-web.sh
    ├── cron-service
    │   ├── .gitignore
    │   ├── Dockerfile
    │   ├── main.js
    │   ├── package.json
    │   └── yarn.lock
    ├── deployment-cron-service.k8s.yaml
    ├── deployment-redis.k8s.yaml
    ├── deployment-web-server.k8s.yaml
    ├── docker-compose.yml
    ├── package.json
    └── web-server
        ├── .gitignore
        ├── Dockerfile
        ├── main.js
        ├── package.json
        └── yarn.lock
```


### 📂 Project Index
<details open>
	<summary><b><code>REDLOCK-K8S-LABORATORY/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/deployment-redis.k8s.yaml'>deployment-redis.k8s.yaml</a></b></td>
				<td>- Configures a Redis deployment and service in a Kubernetes cluster<br>- The deployment spins up a single Redis container, exposing port 6379<br>- The accompanying service enables network access to the Redis instance, allowing other components to store and retrieve data<br>- Redis acts as an in-memory data store, providing fast caching and persistence capabilities to the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/deployment-web-server.k8s.yaml'>deployment-web-server.k8s.yaml</a></b></td>
				<td>- Defines a Kubernetes deployment and service for the web server component<br>- The deployment manages a single replica of the web server container, specifying the container image and port<br>- The service exposes the web server externally, routing traffic to the appropriate pod<br>- Together, they enable reliable deployment and access to the web server within the Kubernetes cluster architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/docker-compose.yml'>docker-compose.yml</a></b></td>
				<td>- Orchestrates the deployment of a multi-service architecture using Docker Compose<br>- Defines three services: a web server, a cron service, and Redis<br>- The web server and cron service are built from custom images, while Redis uses the official image<br>- Environment variables are set for each service, and the cron service depends on the web server and Redis.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/deployment-cron-service.k8s.yaml'>deployment-cron-service.k8s.yaml</a></b></td>
				<td>- Configures a Kubernetes deployment for the cron service in the Redlock Laboratory project<br>- Sets up 5 replicas of the cron service container, specifying the container image and environment variables for connecting to the web server and Redis services<br>- Ensures high availability and scalability of the cron service within the project's microservices architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/package.json'>package.json</a></b></td>
				<td>- Configures the project's build, deployment, and logging processes<br>- Defines scripts for starting the application, building Docker images, and managing containers using Docker Compose<br>- Includes commands for deploying and removing Kubernetes resources<br>- Provides convenient scripts for accessing logs of the web server and Redis components, streamlining development and troubleshooting tasks.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- web-server Submodule -->
		<summary><b>web-server</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/web-server/Dockerfile'>Dockerfile</a></b></td>
				<td>- Dockerfile sets up a Node.js environment for the web server component of the project<br>- It installs dependencies, copies the necessary files, and specifies the command to run the main server script<br>- The Dockerfile enables building a containerized version of the web server, facilitating deployment and ensuring a consistent runtime environment across different systems.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/web-server/package.json'>package.json</a></b></td>
				<td>- Manages dependencies and metadata for the web server component of the project<br>- Specifies the required third-party libraries, including Express for handling HTTP requests, body-parser for parsing request bodies, and Luxon for date and time manipulation<br>- Defines the entry point of the web server and sets the license under which the package is distributed.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/web-server/main.js'>main.js</a></b></td>
				<td>- Serves as the main entry point for the web server, handling HTTP requests and managing application state<br>- Exposes endpoints for receiving and processing messages, tracking data in memory based on message content<br>- Facilitates communication between system components and provides a centralized location for monitoring and controlling the application's behavior.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- commands Submodule -->
		<summary><b>commands</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/commands/build-into-registry.sh'>build-into-registry.sh</a></b></td>
				<td>- Builds Docker images within the Minikube environment, enabling seamless local development and testing<br>- By leveraging Minikube's Docker daemon, the script eliminates the need to push images to a remote registry, streamlining the development workflow<br>- This integration allows for efficient iteration and debugging of containerized applications before deploying to production environments.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/commands/log-redis.sh'>log-redis.sh</a></b></td>
				<td>- Enables real-time monitoring of Redis keys in a Kubernetes cluster<br>- Retrieves the name of the Redis pod using kubectl, then continuously displays the keys stored in the Redis database using the redis-cli command<br>- Facilitates observing changes to Redis data without manually connecting to the pod, aiding in debugging and understanding the application's runtime state.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/commands/log-web.sh'>log-web.sh</a></b></td>
				<td>- Enables viewing real-time logs for the web component in a Kubernetes cluster<br>- Retrieves the pod name associated with the web service using kubectl and the grep command<br>- Utilizes the kubectl logs command with the -f flag to stream the logs of the identified web pod, facilitating continuous monitoring and troubleshooting of the web component within the project's architecture.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- cron-service Submodule -->
		<summary><b>cron-service</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/cron-service/Dockerfile'>Dockerfile</a></b></td>
				<td>- Dockerfile sets up the environment for running the cron-service, a component of the project's architecture<br>- It installs dependencies, copies the necessary files, and specifies the command to start the service<br>- The cron-service likely performs scheduled tasks or background jobs, contributing to the overall functionality and automation within the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/cron-service/package.json'>package.json</a></b></td>
				<td>- package.json defines dependencies and metadata for the cron-service, a component of the project's architecture<br>- It specifies the required libraries, such as ioredis for Redis interaction, cron for scheduling tasks, and luxon for date/time handling<br>- The file also includes development dependencies and identifies the entry point of the cron-service module.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/diekotto/redlock-k8s-laboratory/blob/master/cron-service/main.js'>main.js</a></b></td>
				<td>- Serves as the cron service for the project architecture, executing scheduled tasks at regular intervals<br>- Utilizes Redis for distributed locking and list management<br>- Communicates with the web server to send task-related messages<br>- Ensures tasks are processed efficiently and reliably by implementing retry logic and random sleep intervals between task executions.</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with redlock-k8s-laboratory, ensure your runtime environment meets the following requirements:

- **Programming Language:** Error detecting primary_language: {'yaml': 3, 'yml': 1, 'json': 3, 'lock': 2, 'js': 2, 'sh': 3}
- **Package Manager:** Npm, Yarn
- **Container Runtime:** Docker


### ⚙️ Installation

Install redlock-k8s-laboratory using one of the following methods:

**Build from source:**

1. Clone the redlock-k8s-laboratory repository:
```sh
❯ git clone https://github.com/diekotto/redlock-k8s-laboratory
```

2. Navigate to the project directory:
```sh
❯ cd redlock-k8s-laboratory
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-INSTALL-COMMAND-HERE'
```


**Using `yarn`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-INSTALL-COMMAND-HERE'
```


**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker build -t diekotto/redlock-k8s-laboratory .
```




### 🤖 Usage
Run redlock-k8s-laboratory using the following command:
**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-RUN-COMMAND-HERE'
```


**Using `yarn`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-RUN-COMMAND-HERE'
```


**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker run -it {image_name}
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-TEST-COMMAND-HERE'
```


**Using `yarn`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-TEST-COMMAND-HERE'
```


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/diekotto/redlock-k8s-laboratory/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/diekotto/redlock-k8s-laboratory/issues)**: Submit bugs found or log feature requests for the `redlock-k8s-laboratory` project.
- **💡 [Submit Pull Requests](https://github.com/diekotto/redlock-k8s-laboratory/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/diekotto/redlock-k8s-laboratory
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/diekotto/redlock-k8s-laboratory/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=diekotto/redlock-k8s-laboratory">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
