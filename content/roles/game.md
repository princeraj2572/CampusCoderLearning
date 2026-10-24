# Game developer

*Build the interactive worlds that people play.*

## The job

You write the code that makes games run: movement, physics, enemy behaviour, menus, saving, and the many small systems that make a game feel good. A game must run smoothly 60 times a second, so performance and clear structure matter as much as ideas.

### A day in the job

- Implement gameplay features in Unity (C#) or Unreal (C++).
- Tune how the game feels: jump height, camera, controls and timing.
- Profile and fix frame-rate drops.
- Work with artists and designers on tools and content pipelines.
- Fix bugs found in play tests.

**Good if:** You love games and finishing things, you enjoy maths and logic, and you are happy iterating until it feels right.

**Main tools:** C# with Unity, C++ with Unreal, Godot, Git LFS

## Where you will work

| Type | What you do there |
| --- | --- |
| Game studios | Gameplay, tools and engine programming. |
| Mobile game companies | Casual and free-to-play titles. |
| Simulation and training | Games engines for education, defence and architecture. |
| Indie and freelance | Build and sell your own games. |

## Year by year

| Year | Focus | Build | Milestone |
| --- | --- | --- | --- |
| Year 1 | C# or C++, maths for games (vectors), Git | Pong or a platformer clone | Two playable games |
| Year 2 | An engine (Unity or Godot), physics, input, animation | A complete small game with menus and sound | A game on itch.io |
| Year 3 | Game design, AI, optimisation, game jams, an internship | A game jam entry and a polished vertical slice | An internship offer and a demo reel |
| Year 4 | Specialise (gameplay, graphics, tools), playtesting, interview loops | A final game with feedback from real players | An offer for a game developer role |

## Study plan

### Programming and game maths (Months 1–2)

- C# (for Unity) or C++ (for Unreal) with OOP basics.
- Vectors, dot and cross products, and basic geometry.
- The game loop: input, update, render, delta time.
- Git, and keeping large assets out of normal Git.

**Build:** A tiny 2D game with no engine, such as Pong or Snake, using a simple graphics library.

### An engine and your first games (Months 3–5)

- Unity or Godot: scenes, objects, components, prefabs.
- 2D and 3D movement, collision and physics.
- UI, audio, animation and particle effects.
- Saving and loading data.

**Build:** A complete 2D game with a start screen, levels, sound, a win and a lose state.

### Systems and polish (Months 6–8)

- Enemy AI: state machines, pathfinding with A* and behaviour trees.
- Design patterns for games: components, object pooling, events.
- Profiling, memory and optimising frame time.
- Game feel: screen shake, easing, feedback and sound.

**Build:** Add AI enemies and object pooling to your game, and hold 60 frames a second on an older laptop.

### Ship it (Months 9+)

- Multiplayer basics: client and server, lag and synchronisation.
- Shaders and rendering basics.
- Builds for several platforms, and releasing on itch.io or Steam.
- Game jams: finishing a game in 48 hours.

**Build:** Publish a game on itch.io and take feedback from real players.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Classic arcade clone | Pong, Snake or Flappy Bird, finished, with score and restart. | You can finish a game loop from end to end. |
| Intermediate | Platformer or top-down shooter | Levels, enemies with simple AI, sound, a save system and a menu. | You can build several systems that work together. |
| Advanced | Published game or game-jam entry | A polished build with pathfinding or multiplayer, released and playable by strangers. | You can ship, which is what studios look for. |

## Tools

- Unity, Godot or Unreal Engine
- Visual Studio or Rider
- Git and Git LFS
- Aseprite or Blender for simple art
- The engine's profiler
- itch.io for publishing

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Learn one engine feature or maths topic and add it to your game (1 hour) |
| Tue, Thu | DSA, with pathfinding and geometry questions (45 minutes) |
| Fri | Rebuild one mechanic from a game you like (45 minutes) |
| Weekend | Build: three hours on your game, or a game jam |

## A senior's advice

### Do

- Finish small games. Ten finished tiny games teach more than one unfinished epic.
- Make it playable first, then pretty. A grey-box prototype shows if it is fun.
- Join game jams. A deadline forces you to cut and finish.
- Profile before you optimise.
- Let other people play, and watch without telling them what to do.

### Avoid

- Starting with a huge multiplayer RPG.
- Copying a tutorial game and calling it your design.
- Spending months on assets before the game is fun.
- Allocating memory every frame, which causes stutter.
- Ignoring the business side: the market is crowded and finishing counts.

## Engineer's notes

- Make it playable early, then make it good. A fun prototype beats a perfect plan.
- Profile before optimising. Frame drops often come from one unexpected place.
- Playtest with people who did not build it. They find problems you cannot see.
- Keep game logic and engine details separate so changes are less painful.
- Finish small games. Shipping teaches things that unfinished big games never will.

## Mistakes juniors make

- Starting a huge project and never finishing it.
- Putting all logic in one giant script.
- Spawning and destroying objects every frame.
- Tuning by guesswork instead of testing with real players.
- Not building for the target device until the end.

## Questions to ask a senior

- How do you decide a feature is fun enough to keep?
- How do you keep the game running at a steady frame rate?
- How do programmers and designers work together here?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Game development is mostly playing games. | It is long, careful engineering with tight deadlines. |
| You need to be an artist too. | Programmers focus on code, though basic art helps for prototypes. |
| Game skills only lead to game jobs. | Performance, maths and real-time systems transfer to many industries. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Build the project, play the game a lot and fix small bugs. |
| Days 31–60 | Implement a small gameplay feature with the designers and tune how it feels. |
| Days 61–90 | Find and fix a frame-rate problem using the profiler. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Implement features and fix bugs inside an existing game. |
| Mid-level (2–5 years) | Own gameplay systems, such as combat, inventory or AI. |
| Senior (5+ years) | Design the architecture, lead a feature team and tune performance. |
| Staff and beyond | Lead technical direction, engines and tools across projects. |

## Interview preparation

- C++ or C# fundamentals, and DSA at a medium level.
- Vector maths questions, such as finding the angle or distance between objects.
- Explain the game loop and how you would make movement frame-rate independent.
- Design a system, such as an inventory or an enemy AI.
- Show a playable build and explain a technical problem you solved in it.

## Interview questions and answers

**Q: What is a game loop?**

A loop that repeats each frame: process input, update game state, then render. Using delta time keeps motion the same on fast and slow machines.

**Q: How does A* pathfinding work?**

It searches a graph using the cost so far plus a heuristic estimate of the remaining distance, always expanding the most promising node. It finds the shortest path if the heuristic never overestimates.

**Q: How do you optimise a game that drops frames?**

Profile first. Common fixes: reduce draw calls, pool objects, avoid allocations in the update loop, simplify physics and lower texture sizes.

**Q: Why use object pooling?**

Creating and destroying many objects causes garbage collection spikes. Reusing a pool avoids allocation during gameplay.

**Q: How do you detect a collision between two circles?**

Compare the distance between their centres with the sum of the radii. If it is smaller, they overlap. Compare squared values to avoid a square root.

## Glossary

| Term | Meaning |
| --- | --- |
| Game loop | The cycle of reading input, updating the world and drawing a frame. |
| Delta time | The time since the last frame, used to keep speed steady. |
| Collision detection | Finding when objects overlap or touch. |
| Sprite | A 2D image used for characters and objects. |
| Shader | A small program that runs on the GPU to draw pixels. |
| Frame rate | How many frames are drawn each second. |
| Vertical slice | A small, fully polished piece of the final game. |
| Pathfinding | Finding a route for a character, often with A*. |

## Resources

- [Unity Learn](https://learn.unity.com): Free official courses and pathways
- [Godot documentation](https://docs.godotengine.org): A free, open-source engine with a friendly start
- [itch.io game jams](https://itch.io/jams): Find a jam and finish a game
- [Game Programming Patterns](https://gameprogrammingpatterns.com): A free book on structuring game code
