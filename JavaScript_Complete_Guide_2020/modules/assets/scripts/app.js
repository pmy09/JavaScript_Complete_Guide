// class ProjectList {
//     projects =[];

//     constructor(type) {
//         this.type = type;
//         const projItems = document.querySelectorAll(`#${type}-projects li`);
//         for (const projItem of projItems){
//             this.projects.push(new ProjectItem(projItem.id, this.switchProject.bind(this), this.type));
//         }
//         console.log(this.projects);
//         this.connectDroppable();
//     }

//     connectDroppable(){
//         const list = document.querySelector(`#${this.type}-projects ul`);

//         list.addEventListener('dragenter', event => {
//             if (event.dataTransfer.types[0] === 'text/plain'){
//                 list.parentElement.classList.add('droppable');
//                 event.preventDefault();
//             }
//         });

//         list.addEventListener('dragover', event => {
//             if (event.dataTransfer.types[0] === 'text/plain'){
//                 event.preventDefault();
//             }
//         });

//         list.addEventListener('dragleave', event => {
//             if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list){
//                 list.parentElement.classList.remove('droppable');
//             }
//         });

//         list.addEventListener('drop', event => {
//             const projId = event.dataTransfer.getData('text/plain');
//             if (this.projects.find(p => p.id === projId)){
//                 return;
//             }
//             document.getElementById(projId).querySelector('button:last-of-type').click();
//             list.parentElement.classList.remove('droppable');
//             // event.preventDefault(); // not required
//         });
//     }

//     setSwitchHandlerFunction(switchHandlerFunction) {
//         this.switchHandler = switchHandlerFunction;
//     }

//     addProject(project) {
//         this.projects.push(project);
//         DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
//         project.update(this.switchProject.bind(this), this.type);
//     }

//     switchProject(projectId) {
//         // const projectIndex = this.projects.findIndex(p => p.id === projectId);
//         // this.projects.splice(projectIndex, 1);
//         this.switchHandler(this.projects.find(p => p.id === projectId));
//         this.projects = this.projects.filter(p => p.id !== projectId);
//     }
// }



// class ProjectItem {
//     hasActiveToolTip = false;

//     constructor(id, updateProjectListsFunction, type) {
//         this.id = id;
//         this.updateProjectListsHandler = updateProjectListsFunction;
//         this.connectMoreInfoButton();
//         this.connectSwitchButton(type);
//         this.connectDrag();
//     }

//     showMoreInfoHandler() {
//         if (this.hasActiveToolTip){
//             return;
//         }
//         const projectElement = document.getElementById(this.id);
//         console.log(projectElement.dataset);
//         //projectElement.dataset.someInfo = 'Test';
//         const tooltipText = projectElement.dataset.extraInfo;
//         const tooltip = new ToolTip(() => {
//             this.hasActiveToolTip = false;
//         }, tooltipText, this.id);
//         tooltip.attach();
//         this.hasActiveToolTip = true;
//     }

//     connectDrag() {
//         const item = document.getElementById(this.id)
//         item.addEventListener('dragstart', event => {
//             event.dataTransfer.setData('text/plain', this.id);
//             event.dataTransfer.effectAllowed = 'move';
//         });

//         item.addEventListener('dragend', event => {
//             console.log(event);
//         });
//     }

//     connectMoreInfoButton() {
//         const projectItemElement = document.getElementById(this.id);
//         const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
//         moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
//     }

//     connectSwitchButton(type) {
//         const projectItemElement = document.getElementById(this.id);
//         let switchBtn = projectItemElement.querySelector('button:last-of-type');
//         switchBtn = DOMHelper.clearEventListeners(switchBtn);
//         switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
//         switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
//     }

//     update(updateProjectListsFunc, type) {
//         this.updateProjectListsHandler = updateProjectListsFunc;
//         this.connectSwitchButton(type);
//     }
// }



// class DOMHelper {
//     static clearEventListeners(element){
//         const clonedElement = element.cloneNode(true);
//         element.replaceWith(clonedElement);
//         return clonedElement;
//     }

//     static moveElement(elementId, newDestinationSelector) {
//         const element = document.getElementById(elementId);
//         const destinationElement = document.querySelector(newDestinationSelector);
//         destinationElement.append(element);
//         element.scrollIntoView({behavior: 'smooth'});
//     }
// }



// class Component {
//     constructor(hostElementId, insertBefore = false) {
//         if (hostElementId) {
//             this.hostElement = document.getElementById(hostElementId);
//         } else {
//             this.hostElement = document.body;
//         }
//         this.insertBefore = insertBefore;
//     }
//     detach() {
//         if (this.element) {
//             this.element.remove();
//             //this.element.parentElement.removeChild(this.element);
//         }
//     }

//     attach() {
//         this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend', this.element);
//     }
// }




// class ToolTip extends Component {
//     constructor(closeNotifierFunction, text, hostElementId) {
//         super(hostElementId);
//         this.closeNotifier = closeNotifierFunction;
//         this.text = text;
//         this.create();
//     }

//     closeToolTip() {
//         this.detach();
//         this.closeNotifier();
//     }

//     create() {
//         const tooltipElement = document.createElement('div');
//         tooltipElement.className = 'card';
//         //tooltipElement.textContent = this.text;
//         const tooltipTemplate = document.getElementById('tooltip');
//         const tooltipBody = document.importNode(tooltipTemplate.content, true);
//         tooltipBody.querySelector('p').textContent = this.text;
//         tooltipElement.append(tooltipBody);

//         //console.log(this.hostElement.getBoundingClientRect());

//         const hostElPosLeft = this.hostElement.offsetLeft;
//         const hostElPosTop = this.hostElement.offsetTop;
//         const hostElHeight = this.hostElement.clientHeight;
//         const parentElementScrolling = this.hostElement.parentElement.scrollTop;

//         const x = hostElPosLeft + 20;
//         const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

//         tooltipElement.style.position = 'absolute';
//         tooltipElement.style.left = x + 'px';
//         tooltipElement.style.top = y + 'px';

//         tooltipElement.addEventListener('click', this.closeToolTip.bind(this));
//         this.element = tooltipElement;
//     }
// }



class App {
    static init(){
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
        finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList));

        // const someScript = document.createElement('script');
        // someScript.textContent = 'alert("Hi there");';
        // document.head.append(someScript);

        // const timerId = setTimeout(this.startAnalytics, 3000);
        // //document.getElementById('start-analytics-btn').addEventListener('click', this.startAnalytics);
        // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
        //     clearTimeout(timerId);
        // });
    }

    static startAnalytics() {
        const analyticsScript = document.createElement('script');
        analyticsScript.src = 'assets/scripts/Utility/analytics.js';
        analyticsScript.defer = true;
        document.head.append(analyticsScript);
    }
}

App.init();