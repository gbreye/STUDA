import notesData from '../../modules/notes.json';

export const getNotes = () => {
  return {
    htmlString: notesData.html,
    jsString: notesData.js,
  };
};
