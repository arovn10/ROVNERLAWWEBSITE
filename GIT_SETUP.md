# Git Setup for Rovner Law Website

## Fix Git Installation (Required First)

Your Mac has an Intel (x86_64) version of Homebrew/git at `/usr/local/bin/git` that doesn't run correctly on Apple Silicon. Two options:

### Option A: Quick Workaround (Temporary)

Disable the broken git so the system uses Xcode's git:

```bash
sudo mv /usr/local/bin/git /usr/local/bin/git.bak
```

Then test: `git --version`

### Option B: Proper Fix (Recommended)

Install the native ARM version of Homebrew and git:

**1. Install ARM Homebrew**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After install, add Homebrew to your PATH (the installer will show the exact commands):

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

**2. Install Git**

```bash
brew install git
```

**3. Verify Git Works**

```bash
git --version
```

---

## Initialize and Sync with Remote Repo

Once git is working, run these commands from the project directory:

```bash
cd "/Users/alec/Desktop/ROVNERLAWWEBSITE 6/ROVNERLAWWEBSITE"

# Initialize git (if not already)
git init

# Add the remote
git remote add origin https://github.com/arovn10/ROVNERLAWWEBSITE.git

# Stage all files
git add .

# Initial commit
git commit -m "Initial commit: Rovner Law website"

# Push to remote (use main or master depending on your repo default)
git branch -M main
git push -u origin main
```

### If the Repo Already Exists with Content

To sync with an existing remote that has commits:

```bash
git remote add origin https://github.com/arovn10/ROVNERLAWWEBSITE.git
git fetch origin
git branch -M main
git pull origin main --allow-unrelated-histories
# Resolve any merge conflicts, then:
git push -u origin main
```

---

## Repo

**Remote:** [github.com/arovn10/ROVNERLAWWEBSITE](https://github.com/arovn10/ROVNERLAWWEBSITE)
