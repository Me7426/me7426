// Generated by CoffeeScript 1.11.1
var Wander;

Wander = (function() {
  function Wander(options) {
    core.extend(this, core.defaults(options || {}, {
      enabled: true,
      theta: Math.random(Math.PI * 2.0),
      distance: 80,
      radius: 20,
      jitter: 0.5,
      weight: 1.0,
      chance: 1.0
    }));
  }

  Wander.prototype.apply = function(agent) {
    var center, steer, target;
    if (!this.enabled || this.chance < 1 && Math.random() > this.chance) {
      return;
    }
    this.theta += utils.random(-this.jitter, this.jitter);
    center = agent.vel.clone().norm();
    center.scale(this.distance);
    center.add(agent);
    target = new Vector(1, 1);
    target.rotate(this.theta);
    target.scale(this.radius);
    target.add(center);
    steer = Vector.sub(target, agent);
    steer.sub(agent.vel);
    steer.scale(this.weight);
    return agent.acc.add(steer);
  };

  return Wander;

})();
