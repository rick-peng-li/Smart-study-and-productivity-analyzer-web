# Smart Study & Productivity Analyzer

一款基于 MERN 技术栈构建的智能学习与生产力分析应用，帮助用户追踪学习活动、生成绩效分析仪表板、设定目标并保持学习连续性。

## 项目简介

本应用提供以下核心功能：

- **学习计时器** - 追踪学习时长，记录专注时段
- **活动日志** - 记录并展示每日学习活动
- **数据分析仪表板** - 通过图表可视化学习数据
- **AI 智能洞察** - 基于数据提供个性化学习建议
- **目标追踪系统** - 设置并追踪学习目标
- **排行榜** - 与其他学习者竞争，保持动力
- **连续打卡系统** - 培养每日学习的习惯

## 技术架构

### 前端技术栈

| 技术 | 说明 |
|------|------|
| React 19 | 用户界面框架 |
| Vite | 构建工具与开发服务器 |
| React Router 7 | 页面路由管理 |
| Recharts | 数据可视化图表库 |
| Bootstrap 5 | UI 组件与响应式布局 |
| Axios | HTTP 请求客户端 |

### 后端技术栈

| 技术 | 说明 |
|------|------|
| Node.js | JavaScript 运行时 |
| Express 4 | Web 应用框架 |
| MongoDB + Mongoose | NoSQL 数据库与 ODM |
| JWT | 用户认证 |
| bcryptjs | 密码加密 |

### 项目结构

```
Smart-study-and-productivity-analyzer-web/
├── Frontend/                 # React 前端应用
│   ├── src/
│   │   ├── components/       # 可复用 UI 组件
│   │   ├── pages/            # 页面组件
│   │   ├── services/         # API 服务
│   │   ├── data/             # 模拟数据
│   │   └── utils/            # 工具函数
│   ├── package.json
│   └── vite.config.js
│
├── Backend/                  # Express 后端应用
│   ├── src/
│   │   ├── config/           # 数据库配置
│   │   ├── controllers/      # 路由控制器
│   │   ├── middleware/       # 中间件
│   │   ├── models/           # 数据模型
│   │   └── routes/           # 路由定义
│   ├── package.json
│   └── .env.example
│
├── .gitignore                # Git 忽略文件
└── README.md                 # 项目文档
```

## 环境准备

### 前置要求

- Node.js >= 18.x
- npm >= 9.x
- MongoDB Atlas 账户或本地 MongoDB

### 依赖安装

```bash
# 安装前端依赖
cd Frontend
npm install

# 安装后端依赖
cd ../Backend
npm install
```

## 启动方式

### 1. 配置环境变量

复制后端配置文件并填写实际值：

```bash
cd Backend
cp .env.example .env
```

编辑 `.env` 文件，配置以下内容：

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
```

### 2. 启动后端服务

```bash
cd Backend
npm run dev
```

后端服务将运行在 http://localhost:5000

### 3. 启动前端服务

```bash
cd Frontend
npm run dev
```

前端应用将运行在 http://localhost:5173

### 4. 构建生产版本

```bash
# 前端构建
cd Frontend
npm run build

# 构建产物在 dist/ 目录
```

## API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | /api/auth/register | 用户注册 |
| POST | /api/auth/login | 用户登录 |
| GET | /api/auth/me | 获取当前用户信息 |
| GET | /api/dashboard/stats | 获取仪表板统计数据 |
| GET | /api/dashboard/activity | 获取活动数据 |

## 技术特点

- **前后端分离** - 各端独立开发与部署
- **RESTful API** - 标准化的接口设计
- **JWT 认证** - 无状态的用户认证机制
- **响应式设计** - 支持多种设备访问
- **实时数据可视化** - 使用 Recharts 展示学习数据
