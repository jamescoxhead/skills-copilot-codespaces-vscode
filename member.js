function skillsMember() {
    this.name = 'member';
    this.skills = ['fighting', 'running', 'jumping'];
    this.addSkill = function (skill) {
        this.skills.push(skill);
    }
}