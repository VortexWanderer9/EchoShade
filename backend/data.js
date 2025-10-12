[
  {
    "name": "Start new repo",
    "action": "Initialize a new Git repository in the current directory",
    "command": "git init"
  },
  {
    "name": "Clone existing repo",
    "action": "Copy an existing repository from a remote source",
    "command": "git clone <repo-url>"
  },
  {
    "name": "Check repo status",
    "action": "Show the status of changes as untracked, modified, or staged",
    "command": "git status"
  },
  {
    "name": "Add files",
    "action": "Add specific files or all files to the staging area",
    "command": "git add <file> | git add ."
  },
  {
    "name": "Commit changes",
    "action": "Commit staged changes with a descriptive message",
    "command": "git commit -m \"your commit message\""
  },
  {
    "name": "Amend last commit",
    "action": "Modify the last commit (e.g., to change message or add missed files)",
    "command": "git commit --amend"
  },
  {
    "name": "View commit history",
    "action": "Display the commit history",
    "command": "git log"
  },
  {
    "name": "One-line commit log",
    "action": "Show commit history in compact one-line format",
    "command": "git log --oneline"
  },
  {
    "name": "Show differences",
    "action": "Display changes between working directory and index or commits",
    "command": "git diff"
  },
  {
    "name": "Create new branch",
    "action": "Create a new branch",
    "command": "git branch <branch-name>"
  },
  {
    "name": "List all branches",
    "action": "List local branches (use -a for remote branches too)",
    "command": "git branch | git branch -a"
  },
  {
    "name": "Switch branch",
    "action": "Switch to another branch",
    "command": "git checkout <branch-name>"
  },
  {
    "name": "Create and switch branch",
    "action": "Create a new branch and immediately switch to it",
    "command": "git checkout -b <branch-name>"
  },
  {
    "name": "Merge branch",
    "action": "Merge another branch into the current branch",
    "command": "git merge <branch-name>"
  },
  {
    "name": "Delete branch",
    "action": "Delete a branch locally",
    "command": "git branch -d <branch-name>"
  },
  {
    "name": "Rename branch",
    "action": "Rename the current branch",
    "command": "git branch -m <new-branch-name>"
  },
  {
    "name": "Push changes",
    "action": "Push commits to a remote repository",
    "command": "git push origin <branch-name>"
  },
  {
    "name": "Pull updates",
    "action": "Fetch and merge changes from a remote repository",
    "command": "git pull"
  },
  {
    "name": "Fetch without merge",
    "action": "Fetch updates from remote but do not merge them",
    "command": "git fetch"
  },
  {
    "name": "Set remote origin",
    "action": "Add a new remote repository",
    "command": "git remote add origin <repo-url>"
  },
  {
    "name": "Show remote URLs",
    "action": "List all remote repositories associated with the local repo",
    "command": "git remote -v"
  },
  {
    "name": "Stash changes",
    "action": "Temporarily save changes without committing them",
    "command": "git stash"
  },
  {
    "name": "Apply stashed changes",
    "action": "Apply previously stashed changes",
    "command": "git stash apply"
  },
  {
    "name": "List stashes",
    "action": "View list of stashed changes",
    "command": "git stash list"
  },
  {
    "name": "Drop stash",
    "action": "Remove a specific stash from the list",
    "command": "git stash drop <stash@{n}>"
  },
  {
    "name": "Remove file",
    "action": "Remove a file from the working directory and stage the deletion",
    "command": "git rm <file>"
  },
  {
    "name": "Undo staged file",
    "action": "Unstage a file without deleting changes",
    "command": "git reset HEAD <file>"
  },
  {
    "name": "Revert commit",
    "action": "Undo a specific commit by creating a new commit",
    "command": "git revert <commit-id>"
  },
  {
    "name": "Reset to commit",
    "action": "Reset the current branch to a specific commit",
    "command": "git reset --hard <commit-id>"
  },
  {
    "name": "Show file history",
    "action": "Display commit history for a specific file",
    "command": "git log <file>"
  },
  {
    "name": "Show last commit",
    "action": "View details of the last commit",
    "command": "git show"
  },
  {
    "name": "Tag a commit",
    "action": "Create a tag at the current commit",
    "command": "git tag <tag-name>"
  },
  {
    "name": "List tags",
    "action": "Display all tags in the repository",
    "command": "git tag"
  },
  {
    "name": "Push tags",
    "action": "Push all local tags to remote",
    "command": "git push --tags"
  },
  {
    "name": "Remove untracked files",
    "action": "Delete files not tracked by Git",
    "command": "git clean -f"
  },
  {
    "name": "Short log summary",
    "action": "Show summarized commit info by author",
    "command": "git shortlog -sn"
  },
  {
    "name": "Blame file",
    "action": "Show who last modified each line in a file",
    "command": "git blame <file>"
  },
  {
    "name": "Check out previous commit (detached)",
    "action": "View a previous commit without changing branches",
    "command": "git checkout <commit-id>"
  },
  {
    "name": "Restore file",
    "action": "Restore a file to its last committed state",
    "command": "git restore <file>"
  }
]
