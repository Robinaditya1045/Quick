import { NextResponse,NextRequest } from 'next/server';
import prisma from '@/lib/prisma'; // Adjust the path based on your project structure
import { any, boolean, number } from 'zod';

export async function PUT(req: NextRequest, { params }: { params: { taskId: Number } }) {
  try {
    const { taskId } = params;
    const { title, description, targetTime, completed } = await req.json();

    // Ensure the required fields are provided
    if (!taskId || !title || !targetTime) {
      return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
    }

    // Update the task in the database
    const updatedTask = await prisma.tasks.update({
      where: { id: Number(taskId) },
      data: {
        title,
        description,
        targetTime: new Date(targetTime),
        completedAt: completed ? new Date() : null, // Set the completion time or null
      },
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { taskId: Number } }) {
    const { taskId } = params;
  
    try {
      await prisma.tasks.delete({
        where: { id: Number(taskId) },
      });
      return NextResponse.json({ success: true });
    } catch (error:any) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }
