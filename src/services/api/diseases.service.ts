import api from '../base/service.base';
import { DiseasesEntity } from '@/models/entities/diseases.entity'
import { DiseasesFilterModel } from '@/models/filters/diseases-filter.model'

import diseasesData from '@/services/mock/diseases.data'
import { DataPagingModel } from '@/models/base/data-paging.model'

const DiseasesService = {
  async getAllDiseases(): Promise<DiseasesEntity[]> {
    const response = await api.get('/diseases');
    return response.data;
  },

  async filterDiseases(filter: DiseasesFilterModel): Promise<DataPagingModel<DiseasesEntity>> {
    const response = await api.post(`/diseases/filter-data-paging`, filter);
    if (response?.data) {
      return response.data;
    } else {
      return diseasesData;
    }
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
