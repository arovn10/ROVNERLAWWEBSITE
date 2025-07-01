import React from 'react';

export default function NewPracticeAreaPage() {
  return (
    <div className="admin-section">
      <h1 className="text-2xl font-bold mb-6">Add New Practice Area</h1>
      <form className="admin-form">
        <div className="admin-form-group">
          <label>Title</label>
          <input type="text" name="title" className="admin-form-input" />
        </div>
        <div className="admin-form-group">
          <label>Slug</label>
          <input type="text" name="slug" className="admin-form-input" />
        </div>
        <div className="admin-form-group">
          <label>Description</label>
          <textarea name="description" className="admin-form-textarea" />
        </div>
        <div className="admin-form-group">
          <label>Features (comma separated)</label>
          <input type="text" name="features" className="admin-form-input" />
        </div>
        <div className="admin-form-group">
          <label>Image URL</label>
          <input type="text" name="image" className="admin-form-input" />
        </div>
        <div className="admin-form-group">
          <label>Banner URL</label>
          <input type="text" name="banner" className="admin-form-input" />
        </div>
        <div className="admin-form-group">
          <label>Color</label>
          <input type="text" name="color" className="admin-form-input" />
        </div>
        <button type="submit" className="admin-btn admin-btn-primary mt-4">Create Practice Area</button>
      </form>
    </div>
  );
} 