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
      folderNumber: 'e1k3g',
      name: 'Marché',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      annotations: [
        {
          annotationNumber: '5uy8m',
          label: "Palette d'oeuf",
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'ztl4anc2di9',
          label: 'Saucisson',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'a7t2k',
          label: 'Lait Nido',
          status: TaskStatus.DELETED,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'v9f1n',
          label: 'Glace',
          status: 'DONE',
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'r2j6d',
          label: 'Yaourt',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'e5x9q',
          label: 'Pain ancien',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'k3w7z',
          label: 'Viande haché',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
      ],
    },
    {
      folderNumber: 'i7w4y',
      name: 'Séries',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      annotations: [
        {
          annotationNumber: 'g6h4p',
          label: 'The big bang theory',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'm1c8t',
          label: 'Silicon valley',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'b4s5y',
          label: 'YOU',
          status: TaskStatus.DELETED,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'f8l2r',
          label: 'Last last',
          status: 'DONE',
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'd2v7t',
          label: 'ECHOS',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'z4x6c',
          label: 'OUR HOUSE',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 's8b3n',
          label: 'The big door prize',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
      ],
    },
    {
      folderNumber: 'o4c5n',
      name: 'Films',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      annotations: [
        {
          annotationNumber: 'k6q1j',
          label: 'Mounstrous',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'm9h4g',
          label: 'Hunter ker, kill her',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'w5p8f',
          label: 'Play dead',
          status: TaskStatus.DELETED,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'j7l2r',
          label: 'The communion girl',
          status: 'DONE',
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'f6g1y',
          label: 'Winnie the pooh: Blood and honey',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'c3n2v',
          label: 'Le purgatoire des intimes',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'r9k5t',
          label: "L'exorciste du vatican",
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
      ],
    },
    {
      folderNumber: 't3f9j',
      name: 'Animés',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      annotations: [
        {
          annotationNumber: 'f1j6h',
          label: 'Jujutsu Kaize',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 's9n4v',
          label: 'GTO',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'p8x7z',
          label: 'Death note',
          status: TaskStatus.DELETED,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'l4b5t',
          label: 'Demon slayer',
          status: 'DONE',
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'h2w6c',
          label: 'Prison school',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'r5t7d',
          label: 'Naruto',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'k9j8g',
          label: "Koruko's basket",
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
      ],
    },
    {
      folderNumber: 'x6s2h',
      name: 'Loving',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      annotations: [
        {
          annotationNumber: 'z1x2n',
          label: 'You',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'c3q6r',
          label: 'Know',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'm7f5y',
          label: 'That',
          status: TaskStatus.DELETED,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'v6t9p',
          label: 'I',
          status: 'DONE',
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'd8n7h',
          label: 'Love',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'g1b6y',
          label: 'My',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'w5j2r',
          label: 'SELF',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
      ],
    },
    {
      folderNumber: 'z9n8c',
      name: 'Préférée',
      type: Folder.TASK_GROUP,
      status: FolderStatus.CREATE,
      annotations: [
        {
          annotationNumber: 'x7n6t',
          label: 'Chaussure',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'q9m5f',
          label: 'Tenue de sport',
          status: TaskStatus.TODO,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'y2t1k',
          label: 'Coiffure',
          status: TaskStatus.DELETED,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'b3v7l',
          label: 'Iphone',
          status: 'DONE',
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'n8h6j',
          label: 'AirPods',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'u5q9p',
          label: 'Ipod Touch',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
        {
          annotationNumber: 'a6z8f',
          label: 'Yeah',
          status: TaskStatus.DONE,
          type: Annotation.TASK,
        },
      ],
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
