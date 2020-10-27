class ProjectList {
    projects =[];

    constructor(type) {
        this.type = type;
        const projItems = document.querySelectorAll(`#${type}-projects li`);
        for (const projItem of projItems){
            this.projects.push(new ProjectItem(projItem.id, this.switchProject.bind(this)));
        }
        console.log(this.projects);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
        console.log(this);
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}

class ProjectItem {
    constructor(id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton() {}

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button: last-of-type');
        switchBtn.addEventListener('click', this.updateProjectListsHandler);
    }
}

class ToolTip {}

class App {
    static init(){
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
        finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList));
    }
}

App.init();