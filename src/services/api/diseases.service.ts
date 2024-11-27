import api from '../base/service.base';
import { DiseasesEntity } from '@/models/entities/diseases.entity'
import { DiseasesFilterModel } from '@/models/filters/diseases-filter.model'

const DiseasesService = {
  async getAllDiseases(): Promise<DiseasesEntity[]> {
    const response = await api.get('/diseases');
    return response.data;
  },

  async filterDiseases(filter: DiseasesFilterModel): Promise<DiseasesEntity[]> {
    const response = await api.post(`/diseases/filter-data-paging`, filter);
    return response.data;
  },

  async getDiseasesById(id: string): Promise<DiseasesEntity> {
    const response = await api.get(`/diseases/${id}`);
    return response.data;
  },

  async createDiseases(blog: DiseasesEntity): Promise<DiseasesEntity> {
    const response = await api.post('/diseases', blog);
    return response.data;
  },

  async updateDiseases(diseasesEntity: DiseasesEntity): Promise<DiseasesEntity> {
    const response = await api.put(`/diseases`, diseasesEntity);
    return response.data;
  },

  async deleteDiseases(id: string): Promise<void> {
    await api.delete(`/diseases/${id}`);
  }
}

export default DiseasesService;
