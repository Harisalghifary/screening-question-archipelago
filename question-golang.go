package main

import (
	"fmt"
	"regexp"
	"strings"
)

func countWordFrequency(s string) map[string]int {
	tempStr := strings.ToLower(s)
	// sanitize the input
	re := regexp.MustCompile(`[^a-z0-9\s]`)
	tempStr = re.ReplaceAllString(tempStr, "")

	words := strings.Fields(tempStr)
	wordFreq := make(map[string]int)

	for _, w := range words {
		wordFreq[w]++
	}

	return wordFreq

}

func main() {

	inputStr := "Four, One two two three Three three four  four   four"
	res := countWordFrequency(inputStr)

	for word, count := range res {
		fmt.Printf("%s => %d\n", word, count)
	}

	return
}
