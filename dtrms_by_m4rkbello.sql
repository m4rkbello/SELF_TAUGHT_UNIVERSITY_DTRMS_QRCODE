/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : dtrms_by_m4rkbello

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2025-07-15 18:00:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `access_types`
-- ----------------------------
DROP TABLE IF EXISTS `access_types`;
CREATE TABLE `access_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `access_type_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `access_type_description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `access_type_status_id` int(11) DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of access_types
-- ----------------------------
INSERT INTO `access_types` VALUES ('1', 'superAdmin', 'PinakaGahi sa Tanan', '1', '1', '1', '2025-01-12 06:22:52', '2025-01-12 06:22:52');
INSERT INTO `access_types` VALUES ('2', 'employee', 'Employee Lang Ka', '2', '1', '1', '2025-01-12 06:22:52', '2025-01-12 06:22:52');

-- ----------------------------
-- Table structure for `activity_logs`
-- ----------------------------
DROP TABLE IF EXISTS `activity_logs`;
CREATE TABLE `activity_logs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activity` text COLLATE utf8mb4_unicode_ci,
  `table_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `record_id` bigint(20) unsigned DEFAULT NULL,
  `created_by_user_id` bigint(20) unsigned DEFAULT NULL,
  `created_by_employee_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of activity_logs
-- ----------------------------

-- ----------------------------
-- Table structure for `attendances`
-- ----------------------------
DROP TABLE IF EXISTS `attendances`;
CREATE TABLE `attendances` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `attendance_note` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attendance_time_in` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attendance_time_out` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attendance_status_id` int(11) NOT NULL DEFAULT '1',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attendance_employee_id` bigint(20) unsigned NOT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `attendances_attendance_employee_id_foreign` (`attendance_employee_id`),
  CONSTRAINT `attendances_attendance_employee_id_foreign` FOREIGN KEY (`attendance_employee_id`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of attendances
-- ----------------------------

-- ----------------------------
-- Table structure for `civil_statuses`
-- ----------------------------
DROP TABLE IF EXISTS `civil_statuses`;
CREATE TABLE `civil_statuses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `civil_status_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `civil_status_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `civil_status_status_id` int(11) DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of civil_statuses
-- ----------------------------
INSERT INTO `civil_statuses` VALUES ('1', 'Single', 'A person who is not married.', '1', null, null, '2025-01-12 06:23:15', '2025-01-12 06:23:15');
INSERT INTO `civil_statuses` VALUES ('2', 'Married', 'A person who is legally married.', '1', null, null, '2025-01-12 06:23:15', '2025-01-12 06:23:15');
INSERT INTO `civil_statuses` VALUES ('3', 'Widowed', 'A person whose spouse has passed away.', '1', null, null, '2025-01-12 06:23:15', '2025-01-12 06:23:15');
INSERT INTO `civil_statuses` VALUES ('4', 'Divorced', 'A person who has legally ended a marriage.', '1', null, null, '2025-01-12 06:23:15', '2025-01-12 06:23:15');
INSERT INTO `civil_statuses` VALUES ('5', 'Separated', 'A person who is no longer living with their spouse.', '1', null, null, '2025-01-12 06:23:15', '2025-01-12 06:23:15');

-- ----------------------------
-- Table structure for `deductions`
-- ----------------------------
DROP TABLE IF EXISTS `deductions`;
CREATE TABLE `deductions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `deduction_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deduction_amount` decimal(10,2) DEFAULT NULL,
  `deduction_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deduction_status_id` int(11) DEFAULT NULL,
  `deduction_created_by` int(11) DEFAULT NULL,
  `deduction_updated_by` int(11) DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of deductions
-- ----------------------------

-- ----------------------------
-- Table structure for `departments`
-- ----------------------------
DROP TABLE IF EXISTS `departments`;
CREATE TABLE `departments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `department_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `department_description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `department_status_id` int(11) DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of departments
-- ----------------------------
INSERT INTO `departments` VALUES ('1', 'TEST', 'TEST', '1', null, null, '2025-01-27 11:17:28', '2025-01-27 11:17:28');

-- ----------------------------
-- Table structure for `employees`
-- ----------------------------
DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `employee_firstname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_middlename` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_lastname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_extensionname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_username` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_contact_no` bigint(20) DEFAULT NULL,
  `employee_barangay` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_municipality` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_province` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_region` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_position` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_role` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_birthdate` date DEFAULT NULL,
  `employee_status_id` int(11) NOT NULL DEFAULT '1',
  `employee_image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_qrcode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_sss_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_pagibig_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_philhealth_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_tin_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `access_type_id` bigint(20) unsigned DEFAULT NULL,
  `employee_department_id` bigint(20) unsigned DEFAULT NULL,
  `employee_civil_status_id` bigint(20) unsigned DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employees_access_type_id_foreign` (`access_type_id`),
  CONSTRAINT `employees_access_type_id_foreign` FOREIGN KEY (`access_type_id`) REFERENCES `access_types` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of employees
-- ----------------------------
INSERT INTO `employees` VALUES ('1', 'mark', 'cortejo', 'bello', '..', 'markbello1', '$2y$12$dFjmS0KcFU4CQPcRKdUeFOEVAoCXtNqdJkK/N.jtD.bK0Kbtwr9ZK', 'markbello@gmail.com', '9124899754', null, null, 'Cagayan', 'Caraga Region', null, null, '2025-01-12', '0', null, 'http://localhost:8000/qrcodes/bello__mark.png', '213424', '234234', '234234', '23423423', '2', null, '1', null, null, null, '2025-01-12 06:31:23', '2025-01-12 06:31:25');
INSERT INTO `employees` VALUES ('2', 'pat', 'to', 'toya', 'ohahay', 'patotoya', '$2y$12$.5b/7HauwSiSHA.JaE7B3.Zhd9gFoe2eAi0Ah4.KiSOR5SRYD451G', 'patotoya@gmail.com', '9124899523', null, null, 'Batangas', 'Caraga Region', null, null, '2025-03-23', '1', null, 'http://localhost:8000/qrcodes/toya__pat.png', '234234', '234234234', '234234234', '234234234', '2', null, '1', null, null, null, '2025-03-23 10:30:46', '2025-03-23 10:30:49');
INSERT INTO `employees` VALUES ('3', null, null, null, null, null, null, 'maoymototoy@gmail.com', '9124899542', null, null, null, null, '1', '1', null, '1', null, 'http://127.0.0.1:8000/qrcodes/3.png', null, null, null, null, null, '1', null, null, null, null, '2025-03-23 11:01:19', '2025-03-23 11:01:19');

-- ----------------------------
-- Table structure for `failed_jobs`
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for `images`
-- ----------------------------
DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `img_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_status_id` int(11) NOT NULL,
  `img_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of images
-- ----------------------------

-- ----------------------------
-- Table structure for `migrations`
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('1', '2014_09_23_140118_create_access_types_table', '1');
INSERT INTO `migrations` VALUES ('2', '2014_10_12_000000_create_users_table', '1');
INSERT INTO `migrations` VALUES ('3', '2014_10_12_100000_create_password_reset_tokens_table', '1');
INSERT INTO `migrations` VALUES ('4', '2019_08_19_000000_create_failed_jobs_table', '1');
INSERT INTO `migrations` VALUES ('5', '2019_12_14_000001_create_personal_access_tokens_table', '1');
INSERT INTO `migrations` VALUES ('6', '2024_04_06_202357_create_employees_table', '1');
INSERT INTO `migrations` VALUES ('7', '2024_04_06_202431_create_attendances_table', '1');
INSERT INTO `migrations` VALUES ('8', '2024_04_11_142908_create_images_table', '1');
INSERT INTO `migrations` VALUES ('9', '2024_04_21_130717_create_departments_table', '1');
INSERT INTO `migrations` VALUES ('10', '2024_07_01_162328_create_payrolls_table', '1');
INSERT INTO `migrations` VALUES ('11', '2024_07_08_143533_create_rates_table', '1');
INSERT INTO `migrations` VALUES ('12', '2024_07_08_143558_create_deductions_table', '1');
INSERT INTO `migrations` VALUES ('13', '2024_07_08_143609_create_overtimes_table', '1');
INSERT INTO `migrations` VALUES ('14', '2024_10_11_134353_create_opensource_intelligences_table', '1');
INSERT INTO `migrations` VALUES ('15', '2024_10_14_123724_create_civil_statuses_table', '1');
INSERT INTO `migrations` VALUES ('16', '2024_12_08_112915_create_activity_logs_table', '1');

-- ----------------------------
-- Table structure for `open_source_intelligences`
-- ----------------------------
DROP TABLE IF EXISTS `open_source_intelligences`;
CREATE TABLE `open_source_intelligences` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `osint_public_ip` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `osint_latitude` decimal(11,8) DEFAULT NULL,
  `osint_longitude` decimal(11,8) DEFAULT NULL,
  `osint_employee_id` bigint(20) unsigned DEFAULT NULL,
  `osint_user_id` bigint(20) unsigned DEFAULT NULL,
  `osint_status_id` int(11) DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `open_source_intelligences_osint_employee_id_foreign` (`osint_employee_id`),
  KEY `open_source_intelligences_osint_user_id_foreign` (`osint_user_id`),
  CONSTRAINT `open_source_intelligences_osint_employee_id_foreign` FOREIGN KEY (`osint_employee_id`) REFERENCES `employees` (`id`),
  CONSTRAINT `open_source_intelligences_osint_user_id_foreign` FOREIGN KEY (`osint_user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of open_source_intelligences
-- ----------------------------
INSERT INTO `open_source_intelligences` VALUES ('1', '158.62.80.69', '7.07461120', '125.57352960', null, '1', '1', null, null, '2025-01-12 06:27:52', '2025-01-12 06:27:52');
INSERT INTO `open_source_intelligences` VALUES ('2', '158.62.80.69', '7.07461120', '125.57352960', '1', null, null, null, null, '2025-01-12 06:31:44', '2025-01-12 06:31:44');
INSERT INTO `open_source_intelligences` VALUES ('3', '158.62.75.184', '7.05822720', '125.57025280', '1', null, null, null, null, '2025-01-20 12:05:45', '2025-01-20 12:05:45');
INSERT INTO `open_source_intelligences` VALUES ('4', '158.62.75.184', '7.05822720', '125.57025280', '1', null, null, null, null, '2025-01-20 12:05:47', '2025-01-20 12:05:47');
INSERT INTO `open_source_intelligences` VALUES ('5', '158.62.75.184', '7.06150400', '125.57680640', null, '1', '1', null, null, '2025-01-25 11:47:25', '2025-01-25 11:47:25');
INSERT INTO `open_source_intelligences` VALUES ('6', '158.62.75.184', '7.06150400', '125.57680640', null, '1', '1', null, null, '2025-01-26 03:44:49', '2025-01-26 03:44:49');
INSERT INTO `open_source_intelligences` VALUES ('7', '158.62.75.184', '7.07788800', '125.58336000', null, '1', '1', null, null, '2025-01-27 11:08:03', '2025-01-27 11:08:03');
INSERT INTO `open_source_intelligences` VALUES ('8', '192.168.254.0.1', '7.07461120', '125.57352960', null, '1', '1', null, null, '2025-01-27 11:52:46', '2025-01-27 11:52:46');
INSERT INTO `open_source_intelligences` VALUES ('9', '158.62.75.184', '7.07788800', '125.58336000', null, '1', '1', null, null, '2025-01-27 12:26:31', '2025-01-27 12:26:31');
INSERT INTO `open_source_intelligences` VALUES ('10', '158.62.81.141', '7.03528960', '125.50471680', null, '1', '1', null, null, '2025-02-14 09:57:02', '2025-02-14 09:57:02');
INSERT INTO `open_source_intelligences` VALUES ('11', '158.62.81.141', '7.07120000', '125.60890000', null, '1', '1', null, null, '2025-02-16 09:10:32', '2025-02-16 09:10:32');
INSERT INTO `open_source_intelligences` VALUES ('12', '158.62.81.141', '7.06805760', '125.55059200', null, '1', '1', null, null, '2025-03-02 11:01:16', '2025-03-02 11:01:16');
INSERT INTO `open_source_intelligences` VALUES ('13', '158.62.78.137', '7.04839680', '125.54403840', null, '1', '1', null, null, '2025-03-16 06:19:24', '2025-03-16 06:19:24');
INSERT INTO `open_source_intelligences` VALUES ('14', '158.62.78.137', '7.04839680', '125.54403840', null, '1', '1', null, null, '2025-03-16 06:19:26', '2025-03-16 06:19:26');
INSERT INTO `open_source_intelligences` VALUES ('15', '158.62.78.137', '7.08116480', '125.58991360', null, '1', '1', null, null, '2025-03-23 09:57:20', '2025-03-23 09:57:20');
INSERT INTO `open_source_intelligences` VALUES ('16', '158.62.78.137', '7.08116480', '125.58991360', null, '5', '1', null, null, '2025-03-23 10:28:28', '2025-03-23 10:28:28');
INSERT INTO `open_source_intelligences` VALUES ('17', '158.62.78.137', '7.08116480', '125.58991360', '2', null, null, null, null, '2025-03-23 10:31:28', '2025-03-23 10:31:28');
INSERT INTO `open_source_intelligences` VALUES ('18', '158.62.78.137', '7.08116480', '125.58991360', null, '1', '1', null, null, '2025-03-23 10:36:56', '2025-03-23 10:36:56');

-- ----------------------------
-- Table structure for `overtimes`
-- ----------------------------
DROP TABLE IF EXISTS `overtimes`;
CREATE TABLE `overtimes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `overtime_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `overtime_hour` decimal(10,2) DEFAULT NULL,
  `overtime_rate_per_hour` decimal(10,2) DEFAULT NULL,
  `overtime_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `overtime_status_id` int(11) DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of overtimes
-- ----------------------------

-- ----------------------------
-- Table structure for `password_reset_tokens`
-- ----------------------------
DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_reset_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for `payrolls`
-- ----------------------------
DROP TABLE IF EXISTS `payrolls`;
CREATE TABLE `payrolls` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `payroll_details` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payroll_total_amount` decimal(10,2) NOT NULL,
  `payroll_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payroll_status_id` bigint(20) unsigned DEFAULT NULL,
  `payroll_employee_id` bigint(20) unsigned DEFAULT NULL,
  `payroll_department_id` bigint(20) unsigned DEFAULT NULL,
  `payroll_rate_id` bigint(20) unsigned DEFAULT NULL,
  `payroll_deduction_id` bigint(20) unsigned DEFAULT NULL,
  `payroll_overtime_id` bigint(20) unsigned DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payrolls_payroll_employee_id_foreign` (`payroll_employee_id`),
  KEY `payrolls_payroll_department_id_foreign` (`payroll_department_id`),
  CONSTRAINT `payrolls_payroll_department_id_foreign` FOREIGN KEY (`payroll_department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL,
  CONSTRAINT `payrolls_payroll_employee_id_foreign` FOREIGN KEY (`payroll_employee_id`) REFERENCES `employees` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of payrolls
-- ----------------------------

-- ----------------------------
-- Table structure for `personal_access_tokens`
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------
INSERT INTO `personal_access_tokens` VALUES ('1', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'a487e99e43ea8f8bcdde3879eb7453fdd2dfb061006842e8400fe1d2a9c1d1ef', '[\"*\"]', null, null, null, null, '2025-01-12 06:27:02', '2025-01-12 06:27:02');
INSERT INTO `personal_access_tokens` VALUES ('2', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', '700832e5f8cbc5860a2f80129b0e2695a47d4b3017510191875bfb90715f68c4', '[\"*\"]', '2025-01-12 06:28:22', null, null, null, '2025-01-12 06:27:52', '2025-01-12 06:28:22');
INSERT INTO `personal_access_tokens` VALUES ('3', 'App\\Models\\Employee', '1', 'm4rkbello_to_be_fullstack', '09e2f5cb4524b473943fe63bf75835aa7f5ff828b43cdc06cf494a23e68a2eda', '[\"*\"]', '2025-01-12 06:32:25', null, null, null, '2025-01-12 06:31:44', '2025-01-12 06:32:25');
INSERT INTO `personal_access_tokens` VALUES ('4', 'App\\Models\\Employee', '1', 'm4rkbello_to_be_fullstack', '4efb92d27f75506b61fbc6b360189b86f1ae3e9c3df5c7e12a3b4c3f4758321a', '[\"*\"]', null, null, null, null, '2025-01-20 12:05:45', '2025-01-20 12:05:45');
INSERT INTO `personal_access_tokens` VALUES ('5', 'App\\Models\\Employee', '1', 'm4rkbello_to_be_fullstack', '2d8bdaef3f434ad48c61d7b96c51d6105d3a350577707766df465a86a78ebd8c', '[\"*\"]', '2025-01-20 12:05:54', null, null, null, '2025-01-20 12:05:47', '2025-01-20 12:05:54');
INSERT INTO `personal_access_tokens` VALUES ('6', 'App\\Models\\User', '2', 'm4rkbello_to_be_fullstack', '058d8e73b52398d74c06e0755e677a7456832b44566d69c42ddf24acc0020648', '[\"*\"]', null, null, null, null, '2025-01-20 12:40:38', '2025-01-20 12:40:38');
INSERT INTO `personal_access_tokens` VALUES ('7', 'App\\Models\\User', '3', 'm4rkbello_to_be_fullstack', '016d13e087464bfff7e0548f793b65bde95cc0f760ae5e5fbfa2c5e2f9252ba7', '[\"*\"]', null, null, null, null, '2025-01-20 12:42:49', '2025-01-20 12:42:49');
INSERT INTO `personal_access_tokens` VALUES ('8', 'App\\Models\\User', '4', 'm4rkbello_to_be_fullstack', '475174bfc2676e443d4e91149ae0e37f562a3ed40401c1b59bd4a22defad8373', '[\"*\"]', null, null, null, null, '2025-01-20 12:50:58', '2025-01-20 12:50:58');
INSERT INTO `personal_access_tokens` VALUES ('9', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'eb10ee672b9b9f406f1bb183c7068c2f18be81fecfb7f85fe4a1f13f0fcf826f', '[\"*\"]', '2025-01-25 14:14:12', null, null, null, '2025-01-25 11:47:24', '2025-01-25 14:14:12');
INSERT INTO `personal_access_tokens` VALUES ('10', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', '1ae32bfecbf7e44cbc5ecb1f94fdf72dc71ca010dd67bdf30fc2d2cee6006db1', '[\"*\"]', '2025-01-26 10:29:11', null, null, null, '2025-01-26 03:44:49', '2025-01-26 10:29:11');
INSERT INTO `personal_access_tokens` VALUES ('11', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', '8e04ac41d7cc3e19d381afa40714ae8bdcb769609400e6da766ebb4108f486ff', '[\"*\"]', '2025-01-27 12:25:40', null, null, null, '2025-01-27 11:08:03', '2025-01-27 12:25:40');
INSERT INTO `personal_access_tokens` VALUES ('12', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'cf45f8b73bfb198d700e6c8230ca3f4e0647893fde10055e374c1469c2f3bbce', '[\"*\"]', null, null, null, null, '2025-01-27 11:51:50', '2025-01-27 11:51:50');
INSERT INTO `personal_access_tokens` VALUES ('13', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', '04c3c47bce861f28448463af3982701fb25e2b169de5ba0720d2ef1a2ee1ede2', '[\"*\"]', null, null, null, null, '2025-01-27 11:52:46', '2025-01-27 11:52:46');
INSERT INTO `personal_access_tokens` VALUES ('14', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'cd90e086e55a9a4d0796fd420c4f921708106e9b369dd3bfc4fa2b8a9d6e1a9b', '[\"*\"]', '2025-01-27 12:30:55', null, null, null, '2025-01-27 12:26:31', '2025-01-27 12:30:55');
INSERT INTO `personal_access_tokens` VALUES ('15', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'f40354d7eabdcffcb79f9f79086e37c20b714cb8ddd0228b4e43c996ce213bfa', '[\"*\"]', '2025-02-14 09:58:21', null, null, null, '2025-02-14 09:57:02', '2025-02-14 09:58:21');
INSERT INTO `personal_access_tokens` VALUES ('16', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'e3a61917db9c84a6aa67a3e419d1051cdc155caf46f615b1b9da13f4eac233e2', '[\"*\"]', '2025-02-16 09:12:07', null, null, null, '2025-02-16 09:10:32', '2025-02-16 09:12:07');
INSERT INTO `personal_access_tokens` VALUES ('17', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', '815feb35af1db806e5c70468cf1059c521d3f126a71a18eba0e21554bc13e637', '[\"*\"]', '2025-03-02 11:25:42', null, null, null, '2025-03-02 11:01:16', '2025-03-02 11:25:42');
INSERT INTO `personal_access_tokens` VALUES ('18', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'c8ee28265ed2facff3ddb1dc465ef03ae148e405e02c21c4e6182afa560e5ee6', '[\"*\"]', null, null, null, null, '2025-03-16 06:19:24', '2025-03-16 06:19:24');
INSERT INTO `personal_access_tokens` VALUES ('19', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'a3bbb9c9aa824202098c9a91ece36c243abc0b1495d5c6ca53a4afe22fa0cb97', '[\"*\"]', '2025-03-16 08:02:09', null, null, null, '2025-03-16 06:19:26', '2025-03-16 08:02:09');
INSERT INTO `personal_access_tokens` VALUES ('20', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'a7954e705c0911ffe4db7942ed4d06ee69b8001bf63f9d22874aebd2f425ea40', '[\"*\"]', '2025-03-23 10:22:38', null, null, null, '2025-03-23 09:57:20', '2025-03-23 10:22:38');
INSERT INTO `personal_access_tokens` VALUES ('21', 'App\\Models\\User', '5', 'm4rkbello_to_be_fullstack', '39a9e1e07e126db705bb3cbadd8b18cc5c54653078029348f21f03e2710f2ae2', '[\"*\"]', null, null, null, null, '2025-03-23 10:27:43', '2025-03-23 10:27:43');
INSERT INTO `personal_access_tokens` VALUES ('22', 'App\\Models\\User', '5', 'm4rkbello_to_be_fullstack', 'f510c4f9a27c8a18e394f4a925e819f91da937ee27b69d521bc2a79e2e3a03dc', '[\"*\"]', '2025-03-23 10:28:44', null, null, null, '2025-03-23 10:28:28', '2025-03-23 10:28:44');
INSERT INTO `personal_access_tokens` VALUES ('23', 'App\\Models\\Employee', '2', 'm4rkbello_to_be_fullstack', 'e2fa047e1a5f53c64dcd2c842eee9f2647e46c0288acedd4aad5eae184e09a8f', '[\"*\"]', '2025-03-23 10:33:33', null, null, null, '2025-03-23 10:31:28', '2025-03-23 10:33:33');
INSERT INTO `personal_access_tokens` VALUES ('24', 'App\\Models\\User', '1', 'm4rkbello_to_be_fullstack', 'b13b13eff43c09cfe639e35b4e6804005bb00b969b7d9ea66bfbbbe4831d3f71', '[\"*\"]', '2025-03-23 11:01:19', null, null, null, '2025-03-23 10:36:56', '2025-03-23 11:01:19');

-- ----------------------------
-- Table structure for `rates`
-- ----------------------------
DROP TABLE IF EXISTS `rates`;
CREATE TABLE `rates` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `rate_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rate_amount_per_day` decimal(10,2) DEFAULT NULL,
  `rate_details` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rate_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rate_status_id` bigint(20) unsigned DEFAULT NULL,
  `rate_department_id` bigint(20) unsigned DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rates_rate_department_id_foreign` (`rate_department_id`),
  KEY `rates_created_by_foreign` (`created_by`),
  KEY `rates_updated_by_foreign` (`updated_by`),
  CONSTRAINT `rates_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  CONSTRAINT `rates_rate_department_id_foreign` FOREIGN KEY (`rate_department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `rates_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of rates
-- ----------------------------

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_firstname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_lastname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `user_contact_no` bigint(20) NOT NULL,
  `user_password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type_id` int(11) DEFAULT NULL,
  `user_image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `access_type_id` bigint(20) unsigned DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_user_email_unique` (`user_email`),
  KEY `users_access_type_id_foreign` (`access_type_id`),
  CONSTRAINT `users_access_type_id_foreign` FOREIGN KEY (`access_type_id`) REFERENCES `access_types` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'mark', 'bello', 'markbello@fullstack', null, '9124899771', '$2y$12$25IZuCMfHXpXHkU8mwaE4ue6OnZ1yeipD17svzDLXMRfH0gOIJOvu', '1', 'http://localhost:8000/images/1737863548.jpg', '1', null, null, null, '2025-01-12 06:27:02', '2025-03-16 06:21:45');
INSERT INTO `users` VALUES ('2', 'mark', 'bello', 'markbello1004@gmail.com', null, '9124899741', '$2y$12$F5HTA.x3vq3nd8SZtvLWM.TCu4ZRoh.pgHtzwPEc0BHKowIIYtOxO', '1', null, '1', null, null, null, '2025-01-20 12:40:38', '2025-01-20 12:40:38');
INSERT INTO `users` VALUES ('3', 'mark', 'bello', 'markbelloworld@gmail.com', null, '9124899135', '$2y$12$4kuf5YOuSBtOlkA2bEv2jekxGChuThDdM3zQkgS/aelIsMgUHROnC', '1', null, '1', null, null, null, '2025-01-20 12:42:49', '2025-01-20 12:42:49');
INSERT INTO `users` VALUES ('4', 'mark', 'bello', 'markbelloworld@gmail1.com', null, '9124899131', '$2y$12$Uk99nlIgWrj3mv3eL0mZCe00oFZ2HR0B8s4RN9OmZFeK4cUu/2s2i', '1', null, '1', null, null, null, '2025-01-20 12:50:58', '2025-01-20 12:50:58');
INSERT INTO `users` VALUES ('5', 'alaw', 'utbo', 'alawutsbo@gmail.com', null, '9124899243', '$2y$12$cgJ4UIbYE8a5/GSJEHiKuOyYD9RkS0s4LRPlhWPAAm0Uh239VfVS.', '1', null, '1', null, null, null, '2025-03-23 10:27:43', '2025-03-23 10:27:43');
