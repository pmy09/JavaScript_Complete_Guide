class ProjectList {
    constructor(type) {
        const projItems = document.querySelectorAll(`#${type}-projects li`);
        console.log(projItems);
    }
}

//class ProjectItem {}

//class ToolTip {}

class App {
    static init(){
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }
}

App.init();