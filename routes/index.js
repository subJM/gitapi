var express = require('express');
var router = express.Router();

// saveLog 함수 가져오기
const saveLog = require('../utils/logger');
const sendMassage = require('../utils/telegram');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  const postData = {"ref":"refs/heads/main","before":"4e28b62b1d9830885293ca3603a960a94d1cdf13","after":"21c5c86556191d2a3bc350fc00b48bd5dbf9a966","repository":{"id":780743604,"node_id":"R_kgDOLokztA","name":"gitapi","full_name":"subJM/gitapi","private":false,"owner":{"name":"subJM","email":"89496526+subJM@users.noreply.github.com","login":"subJM","id":89496526,"node_id":"MDQ6VXNlcjg5NDk2NTI2","avatar_url":"https://avatars.githubusercontent.com/u/89496526?v=4","gravatar_id":"","url":"https://api.github.com/users/subJM","html_url":"https://github.com/subJM","followers_url":"https://api.github.com/users/subJM/followers","following_url":"https://api.github.com/users/subJM/following{/other_user}","gists_url":"https://api.github.com/users/subJM/gists{/gist_id}","starred_url":"https://api.github.com/users/subJM/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/subJM/subscriptions","organizations_url":"https://api.github.com/users/subJM/orgs","repos_url":"https://api.github.com/users/subJM/repos","events_url":"https://api.github.com/users/subJM/events{/privacy}","received_events_url":"https://api.github.com/users/subJM/received_events","type":"User","site_admin":false},"html_url":"https://github.com/subJM/gitapi","description":null,"fork":false,"url":"https://github.com/subJM/gitapi","forks_url":"https://api.github.com/repos/subJM/gitapi/forks","keys_url":"https://api.github.com/repos/subJM/gitapi/keys{/key_id}","collaborators_url":"https://api.github.com/repos/subJM/gitapi/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/subJM/gitapi/teams","hooks_url":"https://api.github.com/repos/subJM/gitapi/hooks","issue_events_url":"https://api.github.com/repos/subJM/gitapi/issues/events{/number}","events_url":"https://api.github.com/repos/subJM/gitapi/events","assignees_url":"https://api.github.com/repos/subJM/gitapi/assignees{/user}","branches_url":"https://api.github.com/repos/subJM/gitapi/branches{/branch}","tags_url":"https://api.github.com/repos/subJM/gitapi/tags","blobs_url":"https://api.github.com/repos/subJM/gitapi/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/subJM/gitapi/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/subJM/gitapi/git/refs{/sha}","trees_url":"https://api.github.com/repos/subJM/gitapi/git/trees{/sha}","statuses_url":"https://api.github.com/repos/subJM/gitapi/statuses/{sha}","languages_url":"https://api.github.com/repos/subJM/gitapi/languages","stargazers_url":"https://api.github.com/repos/subJM/gitapi/stargazers","contributors_url":"https://api.github.com/repos/subJM/gitapi/contributors","subscribers_url":"https://api.github.com/repos/subJM/gitapi/subscribers","subscription_url":"https://api.github.com/repos/subJM/gitapi/subscription","commits_url":"https://api.github.com/repos/subJM/gitapi/commits{/sha}","git_commits_url":"https://api.github.com/repos/subJM/gitapi/git/commits{/sha}","comments_url":"https://api.github.com/repos/subJM/gitapi/comments{/number}","issue_comment_url":"https://api.github.com/repos/subJM/gitapi/issues/comments{/number}","contents_url":"https://api.github.com/repos/subJM/gitapi/contents/{+path}","compare_url":"https://api.github.com/repos/subJM/gitapi/compare/{base}...{head}","merges_url":"https://api.github.com/repos/subJM/gitapi/merges","archive_url":"https://api.github.com/repos/subJM/gitapi/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/subJM/gitapi/downloads","issues_url":"https://api.github.com/repos/subJM/gitapi/issues{/number}","pulls_url":"https://api.github.com/repos/subJM/gitapi/pulls{/number}","milestones_url":"https://api.github.com/repos/subJM/gitapi/milestones{/number}","notifications_url":"https://api.github.com/repos/subJM/gitapi/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/subJM/gitapi/labels{/name}","releases_url":"https://api.github.com/repos/subJM/gitapi/releases{/id}","deployments_url":"https://api.github.com/repos/subJM/gitapi/deployments","created_at":1712032441,"updated_at":"2024-04-02T05:08:47Z","pushed_at":1712211518,"git_url":"git://github.com/subJM/gitapi.git","ssh_url":"git@github.com:subJM/gitapi.git","clone_url":"https://github.com/subJM/gitapi.git","svn_url":"https://github.com/subJM/gitapi","homepage":null,"size":43,"stargazers_count":0,"watchers_count":0,"language":"JavaScript","has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":true,"has_pages":false,"has_discussions":false,"forks_count":0,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":0,"license":null,"allow_forking":true,"is_template":false,"web_commit_signoff_required":false,"topics":[],"visibility":"public","forks":0,"open_issues":0,"watchers":0,"default_branch":"main","stargazers":0,"master_branch":"main"},"pusher":{"name":"subJM","email":"89496526+subJM@users.noreply.github.com"},"sender":{"login":"subJM","id":89496526,"node_id":"MDQ6VXNlcjg5NDk2NTI2","avatar_url":"https://avatars.githubusercontent.com/u/89496526?v=4","gravatar_id":"","url":"https://api.github.com/users/subJM","html_url":"https://github.com/subJM","followers_url":"https://api.github.com/users/subJM/followers","following_url":"https://api.github.com/users/subJM/following{/other_user}","gists_url":"https://api.github.com/users/subJM/gists{/gist_id}","starred_url":"https://api.github.com/users/subJM/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/subJM/subscriptions","organizations_url":"https://api.github.com/users/subJM/orgs","repos_url":"https://api.github.com/users/subJM/repos","events_url":"https://api.github.com/users/subJM/events{/privacy}","received_events_url":"https://api.github.com/users/subJM/received_events","type":"User","site_admin":false},"created":false,"deleted":false,"forced":false,"base_ref":null,"compare":"https://github.com/subJM/gitapi/compare/4e28b62b1d98...21c5c8655619","commits":[{"id":"21c5c86556191d2a3bc350fc00b48bd5dbf9a966","tree_id":"bdf9f0d5c8443d0c7e7f9f597854c50777b9d4f8","distinct":true,"message":"메시지 로그 수정","timestamp":"2024-04-04T15:18:35+09:00","url":"https://github.com/subJM/gitapi/commit/21c5c86556191d2a3bc350fc00b48bd5dbf9a966","author":{"name":"thswhdals","email":"thswhdals@banco.id","username":"jongmin87"},"committer":{"name":"thswhdals","email":"thswhdals@banco.id","username":"jongmin87"},"added":[],"removed":[],"modified":["utils/telegram.js"]}],"head_commit":{"id":"21c5c86556191d2a3bc350fc00b48bd5dbf9a966","tree_id":"bdf9f0d5c8443d0c7e7f9f597854c50777b9d4f8","distinct":true,"message":"메시지 로그 수정","timestamp":"2024-04-04T15:18:35+09:00","url":"https://github.com/subJM/gitapi/commit/21c5c86556191d2a3bc350fc00b48bd5dbf9a966","author":{"name":"thswhdals","email":"thswhdals@banco.id","username":"jongmin87"},"committer":{"name":"thswhdals","email":"thswhdals@banco.id","username":"jongmin87"},"added":[],"removed":[],"modified":["utils/telegram.js"]}};

  res.send(postData.repository.url);
});

router.post('/gitApiSaveLog', function(req, res, next){
  var postData = req.body;
  // 요청 본문을 문자열로 변환하여 로그에 저장
  const logMessage = JSON.stringify(postData);
  saveLog('<======================= gitApiSaveLog ==========================>');
  saveLog(logMessage);

  const data = postData.head_commit;
  const timestamp = new Date(data.timestamp);
  const message = `작성자: ${data.author.name}\n` +
                  `작성자 이메일: ${data.author.email}\n` +
                  `배포자: ${data.committer.name}\n` +
                  `배포자 이메일: ${data.committer.email}\n` +
                  `배포 주소: ${postData.repository.url}\n` +
                  `배포시간: ${formatDate(timestamp)}`;

  sendMassage(message);

});

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

module.exports = router;
