# 部署指南 - Deploy to guangyiliu.com

## 步骤 1: 初始化 Git 仓库

```bash
cd "/Users/guangyi.liu/Projects/Personal Homepage with Blog"
git init
git add .
git commit -m "Initial commit: Personal homepage with dark mode"
```

## 步骤 2: 在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 仓库名称: `guangyiliu.github.io` 或 `personal-homepage`
3. 设置为 **Public**
4. **不要** 初始化 README、.gitignore 或 license（我们已经有了）
5. 点击 "Create repository"

## 步骤 3: 推送代码到 GitHub

```bash
# 将 YOUR_USERNAME 替换为你的 GitHub 用户名
git remote add origin https://github.com/YOUR_USERNAME/guangyiliu.github.io.git
git branch -M main
git push -u origin main
```

## 步骤 4: 安装部署工具

```bash
npm install --save-dev gh-pages
```

## 步骤 5: 部署到 GitHub Pages

```bash
npm run deploy
```

这个命令会：
- 自动构建项目 (`npm run build`)
- 将 build 文件夹部署到 `gh-pages` 分支

## 步骤 6: 配置 GitHub Pages

1. 访问你的 GitHub 仓库
2. 进入 **Settings** > **Pages**
3. Source 选择: **Deploy from a branch**
4. Branch 选择: **gh-pages** / **root**
5. 点击 **Save**

## 步骤 7: 配置自定义域名 (guangyiliu.com)

### 7.1 在 GitHub 设置自定义域名

1. 在 **Settings** > **Pages**
2. Custom domain 输入: `guangyiliu.com`
3. 点击 **Save**
4. 勾选 **Enforce HTTPS** (等 DNS 配置完成后)

### 7.2 配置 DNS 记录

在你的域名注册商（如 Namecheap, GoDaddy, Cloudflare 等）添加以下 DNS 记录：

#### A 记录（指向 GitHub Pages IP）
添加以下 4 条 A 记录：

```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

#### CNAME 记录（用于 www）
```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

### 7.3 验证 DNS 配置

等待 DNS 传播（可能需要 5-48 小时），然后访问：
- https://guangyiliu.com
- https://www.guangyiliu.com

## 更新网站

每次修改后，运行：

```bash
git add .
git commit -m "描述你的更改"
git push origin main
npm run deploy
```

## 验证部署

访问以下 URL 确认部署成功：
- GitHub Pages URL: https://YOUR_USERNAME.github.io/guangyiliu.github.io/
- 自定义域名: https://guangyiliu.com

## 故障排除

### 网站没有显示
1. 检查 GitHub Actions 是否成功
2. 确认 gh-pages 分支存在
3. 检查 Settings > Pages 配置是否正确

### 自定义域名不工作
1. 使用 `dig guangyiliu.com` 检查 DNS 记录
2. 确认 public/CNAME 文件存在且包含 `guangyiliu.com`
3. 等待 DNS 传播完成

### HTTPS 证书错误
1. 确保 DNS 已正确配置
2. 在 GitHub Pages 设置中勾选 "Enforce HTTPS"
3. 等待几分钟让 GitHub 自动生成证书

## 有用的命令

```bash
# 本地开发
npm run dev

# 构建预览
npm run build
npm run preview

# 部署
npm run deploy
```
