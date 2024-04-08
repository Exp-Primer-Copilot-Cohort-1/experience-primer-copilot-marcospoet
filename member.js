function skillsMember() {
    var skills = document.getElementById('skills');
    var member = document.getElementById('member');
    var memberSkills = document.getElementById('memberSkills');
    var memberSkillsClose = document.getElementById('memberSkillsClose');
    var memberSkillsList = document.getElementById('memberSkillsList');
    var memberSkillsListItems = document.getElementsByClassName('memberSkillsListItem');
    var memberSkillsListItemsLength = memberSkillsListItems.length;

    memberSkillsClose.onclick = function() {
        memberSkills.style.display = 'none';
    }

    for (var i = 0; i < memberSkillsListItemsLength; i++) {
        memberSkillsListItems[i].onclick = function() {
            memberSkills.style.display = 'block';
            memberSkillsList.style.display = 'none';
            skills.style.display = 'none';
            member.style.display = 'block';
        }
    }
}