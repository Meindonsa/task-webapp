import { Injectable } from '@angular/core';

enum Annotation {
  TASK = 'TASK',
  NOTE = 'NOTE',
}

enum Folder {
  TASK_GROUP = 'TASK_GROUP',
  NOTE_GROUP = 'NOTE_GROUP',
}

enum TaskStatus {
  TODO = 'TODO',
  DONE = 'DONE',
  DELETED = 'DELETED',
}

enum FolderStatus {
  CREATE = 'CREATE',
  DELETED = 'DELETED',
}
@Injectable({
  providedIn: 'root',
})
export class AnnotationService {
  constructor() {}

  retrieveAnnotations() {
    return this.annotations;
  }

  retrieveTasks() {
    var tasks: any = [];
    this.annotations.forEach((annotation) => {
      if (annotation.type == Annotation.TASK) {
        tasks.push(annotation);
      }
    });
    return tasks;
  }

  retrieveNotes() {
    var notes: any = [];
    this.annotations.forEach((annotation) => {
      if (annotation.type == Annotation.NOTE) {
        notes.push(annotation);
      }
    });
    return notes;
  }

  retrieveFolders() {
    return this.folders;
  }

  retrieveTasksGroup() {
    var tasksGroup: any = [];
    this.folders.forEach((folder) => {
      if (folder.type == Folder.TASK_GROUP) {
        tasksGroup.push(folder);
      }
    });
    return tasksGroup;
  }

  retrieveNotesGroup() {
    var notesGroup: any = [];
    this.folders.forEach((folder) => {
      if (folder.type == Folder.NOTE_GROUP) {
        notesGroup.push(folder);
      }
    });
    return notesGroup;
  }

  folders = [
    {
      folderNumber: 'a0ilB1R',
      name: 'Marché',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
    },
    {
      folderNumber: 'f0iB3R',
      name: 'Séries',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
    },
    {
      folderNumber: 'a0iN3x',
      name: 'Films',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
    },
    {
      folderNumber: 'f0iB3R',
      name: 'Animés',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
    },
    {
      folderNumber: 'a0iN3x',
      name: 'Loving',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
    },
    {
      folderNumber: 'f0iB3R',
      name: 'Préférée',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
    },
    {
      folderNumber: 'f0iB3R',
      name: 'Cours',
      type: Folder.NOTE_GROUP,
      status: FolderStatus.CREATE,
    },
    {
      folderNumber: 'c0Ur1n',
      name: 'Journal',
      type: Folder.NOTE_GROUP,
      status: FolderStatus.DELETED,
    },
    {
      folderNumber: 'h0TBpS',
      name: 'HTTP',
      type: Folder.NOTE_GROUP,
      status: FolderStatus.CREATE,
    },
    {
      folderNumber: 'n0v1r0',
      name: 'Nuclino',
      type: Folder.NOTE_GROUP,
      status: FolderStatus.CREATE,
    },
  ];

  annotations = [
    {
      annotationNumber: 'zt7usc2eil',
      label: 'Manger',
      status: TaskStatus.DONE,
      type: Annotation.TASK,
    },
    {
      annotationNumber: '77e6cs34A',
      label: 'Cours de Géographie',
      status: TaskStatus.TODO,
      type: Annotation.NOTE,
    },
    {
      annotationNumber: 'zt7uAc2eil',
      label: 'Cuisiner',
      status: 'DONE',
      type: Annotation.TASK,
    },
    {
      annotationNumber: 'a7ee1s34A',
      label: 'Hier',
      status: TaskStatus.DELETED,
      type: Annotation.NOTE,
    },
    {
      annotationNumber: 'zt7ysc2eil',
      label: 'Changer de téléphone',
      status: TaskStatus.DELETED,
      type: Annotation.TASK,
    },
    {
      annotationNumber: 'c7eTcs34b',
      label: 'Themes',
      status: TaskStatus.TODO,
      type: Annotation.NOTE,
    },
    {
      annotationNumber: 'ztl4anc2di9',
      label: 'Lessive',
      status: TaskStatus.TODO,
      type: Annotation.TASK,
    },
    {
      annotationNumber: 'z7we9s340',
      label: 'Pensés',
      status: TaskStatus.TODO,
      type: Annotation.NOTE,
    },
    {
      annotationNumber: 'zt7usc2eil',
      label: "Implement l'intercepteur",
      status: TaskStatus.TODO,
      type: Annotation.TASK,
    },
    {
      annotationNumber: '21eFci03i8',
      label: 'Recommendation',
      status: TaskStatus.DELETED,
      type: Annotation.NOTE,
    },
  ];
}
