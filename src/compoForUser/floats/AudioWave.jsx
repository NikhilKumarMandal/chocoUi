import React, { useState, useEffect } from 'react'

export default function AudioWave() {
    return (
      <div className="flex items-center justify-center">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-cyan-400 rounded"
              style={{
                height: "30px",
                animation: "pulseWave 1s infinite",
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
        <style>
          {`@keyframes pulseWave {
            0%, 100% { height: 20px; }
            50% { height: 50px; }
          }`}
        </style>
      </div>
    );
  }