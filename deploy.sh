#!/bin/bash

# EMU-WC Website Deploy Script
# Automated deployment via GitHub integration

echo "🚀 EMU-WC Website Deploy Script"
echo "================================"

# Check if we're in a git repo
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check for uncommitted changes
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "⚠️  Uncommitted changes detected"
    echo "📋 Status:"
    git status --porcelain
    echo ""
    read -p "🤔 Continue with deploy? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deploy cancelled"
        exit 1
    fi
fi

# Run build test
echo "🔨 Testing build..."
if ! pnpm build; then
    echo "❌ Build failed - fix errors before deploying"
    exit 1
fi
echo "✅ Build successful"

# Add and commit changes if any
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "📝 Committing changes..."
    git add .
    
    # Get commit message from user
    echo "💬 Enter commit message (or press Enter for auto-generated):"
    read -r COMMIT_MSG
    
    if [ -z "$COMMIT_MSG" ]; then
        COMMIT_MSG="Deploy updates

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
    else
        COMMIT_MSG="$COMMIT_MSG

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
    fi
    
    git commit -m "$COMMIT_MSG"
fi

# Push to trigger auto-deploy
echo "⬆️  Pushing to GitHub..."
git push

echo ""
echo "✅ Deploy initiated!"
echo "🌐 GitHub will automatically deploy to Vercel"
echo "📊 Check status: https://github.com/$(git remote get-url origin | sed 's/.*github\.com[:/]\([^.]*\)\.git/\1/')/actions"
echo ""
echo "🎉 Done! Your changes will be live in ~30 seconds"