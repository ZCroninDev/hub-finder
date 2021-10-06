class Github {
  constructor() {
    this.config = {
      headers: {
        Authorization: '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'
      }
    }
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    )
 
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    )
 
    const profile = await profileResponse.json()
 
    const repos = await repoResponse.json()
 
    return {
      profile,
      repos
    }
  }
}