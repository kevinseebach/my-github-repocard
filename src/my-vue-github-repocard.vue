<template>
  <div class="github-repo-card">
    <div class="dflex">
      <div id="owner" >
        <a :href="profile.owner.html_url" target="_blank" class="avatar">
          <img :src="profile.owner.avatar_url"  alt="">
          <span>@{{profile.owner.login}}</span>
        </a>
      </div>
      <div class="" id="repo">
        <a :href="profile.html_url" target="_blank" id="repo_title">{{profile.name}}</a>
        <p v-if="profile.description" id="repo_desc">{{profile.description}}</p>
        <a :href="profile.html_url" target="_blank" id="repo_link">Show</a>
      </div>
    </div>

    <div class="status">
        <div>
            <a :href="profile.html_url+'/stargazers'" target="_blank">
            <strong>{{profile.stargazers_count}}</strong>
            Stars
            </a>
        </div>
        <div>
            <a :href="profile.html_url+'/watchers'" target="_blank">
            <strong>{{profile.watchers_count}}</strong>
            Watchers
            </a>
        </div>
        <div>
            <a :href="profile.html_url+'/issues'" target="_blank">
            <strong>{{profile.open_issues_count}}</strong>
            Open issues
            </a>
        </div>
        <div>
            <a :href="profile.html_url+'/network/members'" target="_blank">
            <strong>{{profile.forks_count}}</strong>
            Forks
            </a>
        </div>
    </div>
    <div class="footer" v-if="profile.license">
      {{profile.license.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubRepoCard",
  data(){
    return {
      profile:{}
    }
  },
  props: {
      username: {
        type: String,
        required: true,
      },
      reponame: {
        type: String,
        required: true,
      }
  },
  mounted: function() {
    console.log(this.reponame);
    fetch(`https://api.github.com/repos/`+this.username+"/"+this.reponame)
            .then((res) => this.profile = res.json())
            .then((data) => {console.log(data); this.profile = data;})
  }
}
</script>

<style lang="css" scoped>

.github-repo-card {
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 8px 8px 0;
    background: #f4f4f4;
    color: #555;
    position: relative;
    width: 400px;


}
.github-repo-card .dflex{
      display: flex;
      width: 100%;
}
#owner{
  width: calc(100% / 3);
  padding:10px 5px;
  align-self: center;
  text-align: center;
}
#repo{
  width: calc(100% * 2/3);
  padding:10px 5px;
  align-self: center;
  text-align: center;
}

#repo_title{
  text-transform: uppercase;
  color: #292f33;
  font-size: 15px;
  line-height: 1.6;
  padding: 0px;
  font-weight: bold;
}
#repo_desc{
  padding:0px 5px;
  margin: 5px;
  text-align: justify;
}

#repo_link{
  border: 1px solid #707070;
  padding: 3px 20px;
  background: white;
  display: inline-flex;
  margin-top:10px;
}
#repo_link:hover{
  background: #70707022;

}
.avatar img{
  max-width: 100px;
  border-radius: 50%;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45);
}

.avatar span{
  display: block;
  color: #292f33;
  font-size: 15px;
  line-height: 1.6;
  font-weight: bold;
}

.github-repo-card strong {
    display: block;
    color: #292f33;
    font-size: 16px;
    line-height: 1.6;
}
.github-repo-card a {
    color: #707070;
    text-decoration: none;
}
.github-repo-card div.status {
    text-transform: uppercase;
    font-size: 12px;
    color: #707070;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top:10px;
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    border-top : 2px solid #ccc;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.github-repo-card .status div {
    padding: 4px 18px;
    border-left: 1px sodivd #eee;
}

.github-repo-card .footer {
  width: 100%;
  display: block;
  font-size: 12px;
  font-weight: 700;
  padding: 11px 0 10px;
  color: #646464;
  text-align:center;
}



</style>
