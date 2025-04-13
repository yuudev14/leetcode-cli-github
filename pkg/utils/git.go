package utils

import (
	"fmt"
	"os"
	"os/exec"
	"time"
)

type Git interface {
	StdHandler(cmd *exec.Cmd, errMessage string)
	GitAdd()
	GitCommit(commitMsg string)
	GitPush()
	PushAllChanges()
}

type GitImpl struct{}

func NewGit() Git {
	return &GitImpl{}
}

func (g *GitImpl) StdHandler(cmd *exec.Cmd, errMessage string) {
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		fmt.Printf("%s: %v", errMessage, err)
		os.Exit(1)
	}
}

func (g *GitImpl) GitAdd() {
	cmd := exec.Command("git", "add", ".")
	g.StdHandler(cmd, "error running git add")
}

func (g *GitImpl) GitCommit(commitMsg string) {
	cmd := exec.Command("git", "commit", "-m", commitMsg)
	g.StdHandler(cmd, "error running git commit")

}

func (g *GitImpl) GitPush() {
	cmd := exec.Command("git", "push")
	g.StdHandler(cmd, "error running git push")

}

func (g *GitImpl) PushAllChanges() {
	g.GitAdd()
	g.GitCommit(time.Now().Format(time.RFC1123Z))
	g.GitPush()
}
