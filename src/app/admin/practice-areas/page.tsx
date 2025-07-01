"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PracticeAreasAdminPage() {
  const [practiceAreas, setPracticeAreas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/practice-areas')
      .then(res => res.json())
      .then(data => {
        setPracticeAreas(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this practice area?')) return;
    await fetch(`/api/practice-areas/${id}`, { method: 'DELETE' });
    setPracticeAreas(practiceAreas.filter(area => area.id !== id));
  };

  return (
    <div className="admin-section">
      <h1 className="text-2xl font-bold mb-6">Practice Areas</h1>
      <div className="mb-4">
        <Link href="/admin/practice-areas/new" className="admin-btn admin-btn-primary">Add New Practice Area</Link>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan={4} className="text-center py-8">Loading...</td></tr>
          ) : practiceAreas.length === 0 ? (
            <tr><td colSpan={4} className="text-center py-8">No practice areas found.</td></tr>
          ) : (
            practiceAreas.map((area: any) => (
              <tr key={area.id}>
                <td>{area.title}</td>
                <td>{area.slug}</td>
                <td>{area.description}</td>
                <td>
                  <Link href={`/admin/practice-areas/${area.id}/edit`} className="admin-btn admin-btn-secondary mr-2">Edit</Link>
                  <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(area.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
} 