USE facultades;

CREATE TABLE IF NOT EXISTS faculties (
    id          int primary key auto_increment,
    name        varchar(100) not null,
    description text,
    path_img    VARCHAR(255)
);

INSERT INTO faculties (name, description, path_img) VALUES
                                                        ('Faculty of Engineering', 'Focused on developing engineering professionals with solid technical and practical skills.', '/images/engineering.jpg'),
                                                        ('Faculty of Medicine', 'Offers comprehensive training in health sciences and medical practices.', '/images/medicine.jpg'),
                                                        ('Faculty of Business Administration', 'Prepares students for leadership roles in business and management.', '/images/business.jpg'),
                                                        ('Faculty of Law', 'Provides a rigorous education in legal principles and practices.', '/images/law.jpg'),
                                                        ('Faculty of Architecture', 'Combines creative design with practical architectural skills.', '/images/architecture.jpg'),
                                                        ('Faculty of Arts and Humanities', 'Promotes the study of human culture, literature, and the arts.', '/images/arts_humanities.jpg'),
                                                        ('Faculty of Science', 'Dedicated to advancing knowledge in the natural and physical sciences.', '/images/science.jpg'),
                                                        ('Faculty of Social Sciences', 'Explores the complexities of human society and social relationships.', '/images/social_sciences.jpg'),
                                                        ('Faculty of Education', 'Trains educators to excel in teaching and learning environments.', '/images/education.jpg'),
                                                        ('Faculty of Information Technology', 'Focuses on cutting-edge IT skills and technologies.', '/images/information_technology.jpg'),
                                                        ('Faculty of Environmental Studies', 'Studies the impact of human activity on the environment.', '/images/environmental_studies.jpg'),
                                                        ('Faculty of Economics', 'Teaches the principles of economics and their applications.', '/images/economics.jpg'),
                                                        ('Faculty of Communication', 'Explores media, communication, and their societal impacts.', '/images/communication.jpg'),
                                                        ('Faculty of Psychology', 'Focuses on the study of human behavior and mental processes.', '/images/psychology.jpg'),
                                                        ('Faculty of Agriculture', 'Prepares students for careers in agriculture and food production.', '/images/agriculture.jpg'),
                                                        ('Faculty of Political Science', 'Examines political systems, government policies, and political behavior.', '/images/political_science.jpg'),
                                                        ('Faculty of Nursing', 'Provides comprehensive training for future nurses.', '/images/nursing.jpg'),
                                                        ('Faculty of Pharmacy', 'Trains professionals in pharmaceutical sciences and practice.', '/images/pharmacy.jpg'),
                                                        ('Faculty of Veterinary Medicine', 'Dedicated to the study and care of animal health.', '/images/veterinary_medicine.jpg'),
                                                        ('Faculty of Public Health', 'Focuses on public health practices, policies, and research.', '/images/public_health.jpg');
