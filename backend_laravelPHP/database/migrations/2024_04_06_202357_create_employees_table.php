<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('employee_firstname')->nullable();
            $table->string('employee_middlename')->nullable();
            $table->string('employee_lastname')->nullable();
            $table->string('employee_extensionname')->nullable();
            $table->string('employee_username')->nullable();
            $table->string('employee_password')->nullable();
            $table->string('employee_email')->nullable();
            $table->bigInteger('employee_contact_no')->nullable();
            $table->string('employee_barangay')->nullable();
            $table->string('employee_municipality')->nullable();
            $table->string('employee_province')->nullable();
            $table->string('employee_region')->nullable();
            $table->string('employee_position')->nullable();
            $table->string('employee_role')->nullable();
            $table->date('employee_birthdate')->nullable();
            $table->integer('employee_status_id')->default(1);
            $table->string('employee_image')->nullable();
            $table->string('employee_qrcode')->nullable();
            $table->string('employee_sss_no', 255)->nullable();
            $table->string('employee_pagibig_no', 255)->nullable();
            $table->string('employee_philhealth_no', 255)->nullable();
            $table->string('employee_tin_no', 255)->nullable();
            $table->unsignedBigInteger('access_type_id')->nullable(); 
            $table->unsignedBigInteger('employee_department_id')->nullable();
            $table->unsignedBigInteger('employee_civil_status_id')->nullable();
            $table->rememberToken();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->foreign('created_by')
                ->references('id')
                ->on('users')
                ->onDelete('set null');
    
            $table->foreign('updated_by')
                ->references('id')
                ->on('users')
                ->onDelete('set null');
            
            $table->timestamps();
        });

        Schema::table('employees', function (Blueprint $table) {
            if (Schema::hasTable('access_types')) {
                $table->foreign('access_type_id')
                    ->references('id')
                    ->on('access_types')
                    ->onDelete('set null');
            }

            if (Schema::hasTable('departments')) {
                $table->foreign('employee_department_id')
                    ->references('id')
                    ->on('departments')
                    ->onDelete('set null');
            }

            if (Schema::hasTable('civilstatuses')) {
                $table->foreign('employee_civil_status_id')
                    ->references('id')
                    ->on('civilstatuses')
                    ->onDelete('set null');
            }
        });
    }

    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropForeign(['access_type_id']);
            $table->dropForeign(['employee_department_id']);
            $table->dropForeign(['employee_civil_status_id']);
        });

        Schema::dropIfExists('employees');
    }
};