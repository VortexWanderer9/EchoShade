export const gitCheatSheet = [
  // 🧱 BASIC COMMANDS
  {
    name: "Start new repo",
    action: "Initialize a new Git repository in the current directory",
    command: "git init"
  },
  {
    name: "Clone existing repo",
    action: "Copy an existing repository from a remote source",
    command: "git clone <repo-url>"
  },
  {
    name: "Check repo status",
    action: "Show the status of changes as untracked, modified, or staged",
    command: "git status"
  },
  {
    name: "Add files",
    action: "Add specific files or all files to the staging area",
    command: "git add <file> | git add ."
  },
  {
    name: "Commit changes",
    action: "Commit staged changes with a descriptive message",
    command: "git commit -m \"your commit message\""
  },
  {
    name: "Amend last commit",
    action: "Modify the last commit (e.g., to change message or add missed files)",
    command: "git commit --amend"
  },
  {
    name: "View commit history",
    action: "Display the commit history",
    command: "git log"
  },
  {
    name: "One-line commit log",
    action: "Show commit history in compact one-line format",
    command: "git log --oneline"
  },
  {
    name: "Show differences",
    action: "Display changes between working directory and index or commits",
    command: "git diff"
  },

  // 🌿 BRANCHING
  {
    name: "Create new branch",
    action: "Create a new branch",
    command: "git branch <branch-name>"
  },
  {
    name: "List branches",
    action: "List local and remote branches",
    command: "git branch -a"
  },
  {
    name: "Switch branch",
    action: "Switch to another branch",
    command: "git checkout <branch-name>"
  },
  {
    name: "Create and switch branch",
    action: "Create a new branch and switch to it",
    command: "git checkout -b <branch-name>"
  },
  {
    name: "Rename branch",
    action: "Rename the current branch",
    command: "git branch -m <new-name>"
  },
  {
    name: "Delete branch",
    action: "Delete a branch locally",
    command: "git branch -d <branch-name>"
  },
  {
    name: "Merge branch",
    action: "Merge another branch into the current branch",
    command: "git merge <branch-name>"
  },
  {
    name: "Rebase branch",
    action: "Apply commits from one branch on top of another (clean history)",
    command: "git rebase <branch-name>"
  },
  {
    name: "Abort rebase",
    action: "Stop and cancel the rebase process",
    command: "git rebase --abort"
  },
  {
    name: "Continue rebase",
    action: "Continue rebase after resolving conflicts",
    command: "git rebase --continue"
  },
  {
    name: "Interactive rebase",
    action: "Edit, squash, or reorder commits interactively",
    command: "git rebase -i HEAD~<n>"
  },

  // 🧩 REMOTES
  {
    name: "Add remote origin",
    action: "Link a local repo to a remote repository",
    command: "git remote add origin <repo-url>"
  },
  {
    name: "Show remote URLs",
    action: "Display all remotes and their URLs",
    command: "git remote -v"
  },
  {
    name: "Fetch changes",
    action: "Download commits, files, and refs from remote (no merge)",
    command: "git fetch"
  },
  {
    name: "Pull changes",
    action: "Fetch and merge updates from remote branch",
    command: "git pull"
  },
  {
    name: "Push changes",
    action: "Upload local commits to remote repository",
    command: "git push origin <branch>"
  },
  {
    name: "Push all branches",
    action: "Push all branches to remote",
    command: "git push --all"
  },
  {
    name: "Push tags",
    action: "Push all tags to remote repository",
    command: "git push --tags"
  },
  {
    name: "Remove remote",
    action: "Remove a remote connection",
    command: "git remote remove <name>"
  },

  // 🎯 COMMIT MANAGEMENT
  {
    name: "Revert commit",
    action: "Undo a specific commit by creating a new one",
    command: "git revert <commit-id>"
  },
  {
    name: "Reset to commit",
    action: "Reset HEAD to a specific commit (careful: destructive)",
    command: "git reset --hard <commit-id>"
  },
  {
    name: "Soft reset",
    action: "Undo commit but keep changes staged",
    command: "git reset --soft HEAD~1"
  },
  {
    name: "Mixed reset",
    action: "Undo commit and unstage changes (keep them in working dir)",
    command: "git reset --mixed HEAD~1"
  },
  {
    name: "Cherry-pick commit",
    action: "Apply a specific commit from another branch",
    command: "git cherry-pick <commit-id>"
  },
  {
    name: "Reflog",
    action: "View all movements of HEAD (safety net for lost commits)",
    command: "git reflog"
  },

  // 🧠 INSPECTION & CLEANUP
  {
    name: "Show last commit",
    action: "Display information about the last commit",
    command: "git show"
  },
  {
    name: "Show commit details",
    action: "Display details about a specific commit",
    command: "git show <commit-id>"
  },
  {
    name: "Blame file",
    action: "See who last modified each line in a file",
    command: "git blame <file>"
  },
  {
    name: "Clean untracked files",
    action: "Delete all untracked files from working directory",
    command: "git clean -f"
  },
  {
    name: "Clean untracked files and directories",
    action: "Delete untracked files and directories",
    command: "git clean -fd"
  },
  {
    name: "Check differences between branches",
    action: "Show changes between two branches",
    command: "git diff <branch1>..<branch2>"
  },
  {
    name: "Bisect commits",
    action: "Find which commit introduced a bug by binary search",
    command: "git bisect start"
  },

  // 🏷️ TAGS
  {
    name: "Create tag",
    action: "Create a new tag at the current commit",
    command: "git tag <tag-name>"
  },
  {
    name: "Create annotated tag",
    action: "Create a tag with message and metadata",
    command: "git tag -a <tag-name> -m \"message\""
  },
  {
    name: "List tags",
    action: "Show all tags",
    command: "git tag"
  },
  {
    name: "Delete tag",
    action: "Remove a local tag",
    command: "git tag -d <tag-name>"
  },
  {
    name: "Push single tag",
    action: "Push one tag to remote",
    command: "git push origin <tag-name>"
  },

  // ⚙️ STASHING
  {
    name: "Stash changes",
    action: "Temporarily save modifications without committing",
    command: "git stash"
  },
  {
    name: "List stashes",
    action: "Show list of stashed changes",
    command: "git stash list"
  },
  {
    name: "Apply stash",
    action: "Apply most recent stash",
    command: "git stash apply"
  },
  {
    name: "Apply specific stash",
    action: "Apply a specific stash by index",
    command: "git stash apply stash@{n}"
  },
  {
    name: "Drop stash",
    action: "Remove a stash entry",
    command: "git stash drop stash@{n}"
  },
  {
    name: "Clear all stashes",
    action: "Delete all stashes",
    command: "git stash clear"
  },

  // 🧰 SUBMODULES
  {
    name: "Add submodule",
    action: "Add a submodule to your repository",
    command: "git submodule add <repo-url> <path>"
  },
  {
    name: "Init submodules",
    action: "Initialize submodules in a cloned repo",
    command: "git submodule init"
  },
  {
    name: "Update submodules",
    action: "Clone and fetch all submodules",
    command: "git submodule update"
  },
  {
    name: "Remove submodule",
    action: "Remove a submodule completely",
    command: "git rm --cached <path>"
  },

  // 🧩 ADVANCED TOOLS
  {
    name: "Squash commits",
    action: "Combine multiple commits into one (during interactive rebase)",
    command: "git rebase -i HEAD~<n>"
  },
  {
    name: "Show file history",
    action: "Show commits that affected a file",
    command: "git log --follow <file>"
  },
  {
    name: "View current config",
    action: "Display Git configuration",
    command: "git config --list"
  },
  {
    name: "Set global username",
    action: "Set Git username globally",
    command: "git config --global user.name \"Your Name\""
  },
  {
    name: "Set global email",
    action: "Set Git email globally",
    command: "git config --global user.email \"you@example.com\""
  },
  {
    name: "Undo last commit (keep changes)",
    action: "Undo last commit but keep the modifications unstaged",
    command: "git reset --soft HEAD~1"
  },
  {
    name: "Undo last commit (discard changes)",
    action: "Completely remove last commit and its changes",
    command: "git reset --hard HEAD~1"
  }
];
