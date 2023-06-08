export default class LearningAppService {
  public getCurrentlyAttending = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/411814c4-bebf-4b2c-e661-08dab79fa5b4');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }

  public getCategories = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/c7c0f004-5d70-41db-e663-08dab79fa5b4');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }

  public getPopularLecturers = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/f2c280b7-2b1b-47c5-e662-08dab79fa5b4');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }

  public getAllCourses = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/28f292a3-d187-48c4-e660-08dab79fa5b4');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }
}
