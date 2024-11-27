import { AccountEntity } from '@/models/entities/account.entity'
import { DiseasesEntity } from '@/models/entities/diseases.entity'
import { DataPagingModel } from '@/models/base/data-paging.model'

const sampleAuthor: AccountEntity = {
  id: "author-001",
  fullName: "John Doe",
  email: "johndoe@example.com",
  password: "hashedpassword123",
  avatar: "https://robohash.org/doloressinteaque.png?size=50x50&set=set1",
  role: "admin",
  createdAt: "2024-01-01T08:00:00Z",
  updatedAt: "2024-01-10T08:00:00Z",
};

const sampleDiseases: DataPagingModel<DiseasesEntity> = {
  paginationCount: 6,
  data: [
    {
      id: "disease-001",
      name: "Diabetes",
      overview: "Diabetes is a chronic condition that affects how your body processes blood sugar (glucose).",
      symptoms: "Increased thirst, frequent urination, extreme hunger, unexplained weight loss, fatigue.",
      causes: "Type 1 diabetes: autoimmune reaction; Type 2 diabetes: genetic and lifestyle factors.",
      riskFactors: "Obesity, physical inactivity, family history, age, high blood pressure.",
      complications: "Heart disease, nerve damage, kidney damage, eye damage, foot damage.",
      prevention: "Eat healthy foods, exercise regularly, maintain a healthy weight, avoid smoking.",
      diagnosis: "Blood sugar testing, A1C test, fasting glucose test, oral glucose tolerance test.",
      treatment: "Insulin therapy, medications, healthy eating, regular exercise, blood sugar monitoring.",
      lifestyleAndHomeRemedies: "Monitor blood sugar, maintain a healthy weight, manage stress.",
      copingAndSupport: "Join a support group, seek mental health counseling if needed.",
      alternativeMedicine: "Acupuncture, dietary supplements like chromium or magnesium.",
      publishDate: "2024-01-15T10:00:00Z",
      tags: ["Chronic", "Diabetes", "Endocrinology"],
      images: ["http://dummyimage.com/132x158.png/dddddd/000000", "http://dummyimage.com/212x137.png/5fa2dd/ffffff"],
      author: sampleAuthor,
    },
    {
      id: "disease-002",
      name: "Hypertension",
      overview: "Hypertension, also known as high blood pressure, is a condition where the force of the blood against the artery walls is too high.",
      symptoms: "Often asymptomatic; severe cases may include headaches, shortness of breath, nosebleeds.",
      causes: "Genetics, obesity, lack of physical activity, high salt intake, chronic conditions.",
      riskFactors: "Age, family history, being overweight, sedentary lifestyle, tobacco use.",
      complications: "Heart attack, stroke, aneurysm, heart failure, kidney damage.",
      prevention: "Maintain a healthy diet, exercise regularly, reduce sodium intake, avoid alcohol.",
      diagnosis: "Blood pressure measurement, 24-hour ambulatory monitoring, additional lab tests.",
      treatment: "Medications, lifestyle changes such as exercise and diet adjustments.",
      lifestyleAndHomeRemedies: "Monitor blood pressure, manage stress, quit smoking.",
      copingAndSupport: "Support groups for chronic conditions, mental health support if necessary.",
      alternativeMedicine: "Herbal supplements, yoga, meditation for stress reduction.",
      publishDate: "2024-01-20T10:00:00Z",
      tags: ["Heart", "Chronic", "Hypertension"],
      images: ["http://dummyimage.com/133x140.png/dddddd/000000", "http://dummyimage.com/169x113.png/cc0000/ffffff"],
      author: sampleAuthor,
    },
    {
      id: "disease-003",
      name: "Asthma",
      overview: "Asthma is a condition in which your airways narrow and swell and may produce extra mucus.",
      symptoms: "Shortness of breath, chest tightness, wheezing, coughing, especially at night.",
      causes: "Genetic factors, environmental triggers like allergens, exercise, or respiratory infections.",
      riskFactors: "Family history, allergies, exposure to pollution, smoking, occupational triggers.",
      complications: "Severe asthma attacks, respiratory failure, impact on daily life and work.",
      prevention: "Avoid known triggers, manage allergies, use prescribed medications properly.",
      diagnosis: "Lung function tests (spirometry), peak flow measurement, chest X-rays.",
      treatment: "Inhalers, long-term medications, quick-relief inhalers for flare-ups.",
      lifestyleAndHomeRemedies: "Monitor symptoms, use air purifiers, exercise cautiously.",
      copingAndSupport: "Educate yourself, join asthma support groups, manage stress effectively.",
      alternativeMedicine: "Breathing exercises, herbal supplements like ginger or turmeric.",
      publishDate: "2024-01-25T10:00:00Z",
      tags: ["Respiratory", "Asthma", "Chronic"],
      images: ["http://dummyimage.com/157x195.png/ff4444/ffffff", "http://dummyimage.com/107x183.png/dddddd/000000"],
      author: sampleAuthor,
    },
    {
      id: "disease-004",
      name: "Migraine",
      overview: "Migraine is a neurological condition that causes severe headaches, often accompanied by nausea and sensitivity to light.",
      symptoms: "Throbbing pain on one side of the head, nausea, vomiting, light and sound sensitivity.",
      causes: "Hormonal changes, stress, certain foods and drinks, changes in sleep patterns.",
      riskFactors: "Family history, hormonal changes in women, age, stress levels.",
      complications: "Chronic migraine, medication overuse headache, impact on quality of life.",
      prevention: "Identify and avoid triggers, maintain a healthy lifestyle, use preventive medications.",
      diagnosis: "Clinical evaluation, imaging tests if necessary, headache diaries for tracking.",
      treatment: "Pain relievers, triptans, preventive medications, lifestyle changes.",
      lifestyleAndHomeRemedies: "Manage stress, maintain regular sleep schedules, eat healthy foods.",
      copingAndSupport: "Seek counseling, join migraine support groups, practice relaxation techniques.",
      alternativeMedicine: "Acupuncture, biofeedback, magnesium supplements.",
      publishDate: "2024-02-01T10:00:00Z",
      tags: ["Neurology", "Headache", "Migraine"],
      images: ["http://dummyimage.com/138x224.png/ff4444/ffffff", "http://dummyimage.com/229x127.png/dddddd/000000"],
      author: sampleAuthor,
    },
    {
      id: "disease-005",
      name: "Osteoporosis",
      overview: "Osteoporosis is a bone disease that occurs when the body loses too much bone or makes too little bone.",
      symptoms: "Back pain, loss of height over time, brittle bones, fractures.",
      causes: "Aging, hormonal changes, calcium or vitamin D deficiency, lifestyle factors.",
      riskFactors: "Postmenopausal women, sedentary lifestyle, smoking, excessive alcohol consumption.",
      complications: "Fractures, chronic pain, disability, reduced mobility.",
      prevention: "Consume calcium-rich foods, exercise regularly, avoid smoking and alcohol.",
      diagnosis: "Bone density tests, imaging studies, blood tests to rule out other conditions.",
      treatment: "Medications like bisphosphonates, calcium and vitamin D supplements, lifestyle changes.",
      lifestyleAndHomeRemedies: "Increase calcium and vitamin D intake, stay active with weight-bearing exercises.",
      copingAndSupport: "Participate in physical therapy, join support groups for bone health.",
      alternativeMedicine: "Herbal remedies, acupuncture, yoga for flexibility and strength.",
      publishDate: "2024-02-05T10:00:00Z",
      tags: ["Bone Health", "Osteoporosis", "Chronic"],
      images: ["http://dummyimage.com/194x202.png/5fa2dd/ffffff", "http://dummyimage.com/168x113.png/5fa2dd/ffffff"],
      author: sampleAuthor,
    },
    {
      id: "disease-006",
      name: "Depression",
      overview: "Depression is a mental health disorder characterized by persistently depressed mood or loss of interest in activities.",
      symptoms: "Persistent sadness, loss of interest, fatigue, changes in appetite, difficulty concentrating.",
      causes: "Genetic, biological, environmental, and psychological factors.",
      riskFactors: "Family history, major life changes, trauma, certain medications.",
      complications: "Substance abuse, self-harm, suicidal thoughts, difficulty maintaining relationships.",
      prevention: "Develop strong social support, manage stress, seek help early.",
      diagnosis: "Psychological evaluation, questionnaires, blood tests to rule out other conditions.",
      treatment: "Psychotherapy, antidepressant medications, lifestyle changes.",
      lifestyleAndHomeRemedies: "Regular exercise, healthy diet, maintain a sleep schedule.",
      copingAndSupport: "Join therapy groups, practice mindfulness, build a support network.",
      alternativeMedicine: "Yoga, meditation, supplements like omega-3 fatty acids or St. John's Wort.",
      publishDate: "2024-02-10T10:00:00Z",
      tags: ["Mental Health", "Depression", "Psychology"],
      images: ["http://dummyimage.com/168x153.png/5fa2dd/ffffff", "http://dummyimage.com/187x231.png/ff4444/ffffff"],
      author: sampleAuthor,
    }
  ]
};

export default sampleDiseases;
