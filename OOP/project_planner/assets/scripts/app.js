class ProjectList {
    projects =[];

    constructor(type) {
        this.type = type;
        const projItems = document.querySelectorAll(`#${type}-projects li`);
        for (const projItem of projItems){
            this.projects.push(new ProjectItem(projItem.id, this.switchProject.bind(this), this.type));
        }
        console.log(this.projects);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}



class ProjectItem {
    hasActiveToolTip = false;

    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    showMoreInfoHandler() {
        if (this.hasActiveToolTip){
            return;
        }
        const tooltip = new ToolTip(() => {
            this.hasActiveToolTip = false;
        });
        tooltip.attach();
        this.hasActiveToolTip = true;
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
    }

    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
        switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsFunc, type) {
        this.updateProjectListsHandler = updateProjectListsFunc;
        this.connectSwitchButton(type);
    }
}



class DOMHelper {
    static clearEventListeners(element){
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}



class ToolTip {
    constructor(closeNotifierFunction) {
        this.closeNotifier = closeNotifierFunction;
    }

    closeToolTip() {
        this.detach();
        this.closeNotifier();
    }

    detach() {
        this.element.remove();
        //this.element.parentElement.removeChild(this.element);
    }

    attach() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = 'Just Finish'
        tooltipElement.addEventListener('click', this.closeToolTip.bind(this));
        this.element = tooltipElement;
        document.body.append(tooltipElement);
    }
}



class App {
    static init(){
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
        finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList));
    }
}

App.init();