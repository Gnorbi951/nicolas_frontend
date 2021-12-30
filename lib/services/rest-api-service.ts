import axios from 'axios';

interface SomethingWithId {
  id?: string;
}

export default class REST<T extends SomethingWithId> {
  private basePath : string;
  constructor(basePath: string) {
    this.basePath = basePath;
  }

  getAll(): Promise<T[]> {
    return axios.get(`${this.basePath}`).then(res => res.data);
  }

  getById(id: string): Promise<T> {
    return axios.get(`${this.basePath}/${id}`).then(res => res.data);
  }

  post(t: T): Promise<T> {
    return axios.post(`${this.basePath}`, t).then(res => res.data);
  }

  patch(t: T): Promise<T> {
    return axios.patch(`${this.basePath}/${t.id}`, t).then(res => res.data);
  }

  delete(id: string): Promise<void> {
    return axios.delete(`${this.basePath}/${id}`);
  }
}
